import { waitFor } from "@/lib/helper/waitFor";
import { Environment, ExecutionEnvironment } from "@/types/executor";
import puppeteer from "puppeteer";
import puppeteerCore, { Browser as CoreBrowser } from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";
import { LaunchBrowserTask } from "../task/LaunchBrowser";
import { exec } from "child_process";
//this is bright data proxy
const BROWSER_WS =
  "wss://brd-customer-hl_c5716a01-zone-scraping_flow_browser:2y41qfuzsi59@brd.superproxy.io:9222";

const chromeExecutable =
  process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : "/usr/bin/google-chrome";

const openDevtools = async (page: any, client: any) => {
  // get current frameId
  const frameId = page.mainFrame()._id;
  // get URL for devtools from scraping browser
  const { url: inspectUrl } = await client.send("Page.inspect", { frameId });
  // open devtools URL in local chrome
  exec(`"${chromeExecutable}" "${inspectUrl}"`, (error) => {
    if (error) throw new Error("Unable to open devtools: " + error);
  });
  // wait for devtools ui to load
  await waitFor(5000);
};

//to revert to own browser
//remove args from launch time 13:00:19 in the video

export async function LaunchBrowserExecutor(
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> {
  try {
    const websiteUrl = environment.getInput("website Url");
    environment.log.info("Starting browser launch...");

    let browser: CoreBrowser;
    if (process.env.VERCEL_ENV === "production") {
      environment.log.info("Running in Vercel production environment");
      try {
        const execPath = await chromium.executablePath(
          "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar"
        );
        environment.log.info(`Chrome executable path: ${execPath}`);

        browser = await puppeteerCore.launch({
          args: [
            ...chromium.args,
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-accelerated-2d-canvas",
            "--no-first-run",
            "--no-zygote",
            "--disable-gpu",
            "--single-process",
          ],
          executablePath: execPath,
          headless: true,
          defaultViewport: {
            width: 1920,
            height: 1080,
          },
        });
      } catch (browserError: any) {
        environment.log.error(`Browser launch error: ${browserError.message}`);
        environment.log.error(`Stack trace: ${browserError.stack}`);
        throw browserError;
      }
    } else {
      environment.log.info("Running in development environment");
      browser = (await puppeteer.launch({
        headless: false,
      })) as unknown as CoreBrowser;
    }

    environment.log.info("Browser launched successfully");
    environment.setBrowser(browser as unknown as import("puppeteer").Browser);

    try {
      environment.log.info("Creating new page...");
      const page = await browser.newPage();

      environment.log.info("Setting up request interception...");
      await page.setRequestInterception(true);
      page.on("request", (request) => {
        const resourceType = request.resourceType();
        if (
          resourceType === "image" ||
          resourceType === "stylesheet" ||
          resourceType === "font"
        ) {
          request.abort();
        } else {
          request.continue();
        }
      });

      environment.log.info(`Navigating to ${websiteUrl}...`);
      await page.goto(websiteUrl, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      environment.setPage(page as unknown as import("puppeteer").Page);
      environment.log.info(`Successfully opened page at ${websiteUrl}`);
      return true;
    } catch (pageError: any) {
      environment.log.error(`Page operation error: ${pageError.message}`);
      environment.log.error(`Stack trace: ${pageError.stack}`);
      throw pageError;
    }
  } catch (error: any) {
    environment.log.error(`Final error catch: ${error.message}`);
    environment.log.error(`Stack trace: ${error.stack}`);
    return false;
  }
}
