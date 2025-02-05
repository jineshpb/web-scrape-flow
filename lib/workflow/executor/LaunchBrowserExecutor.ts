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

    let browser: CoreBrowser;
    if (process.env.VERCEL_ENV === "production") {
      browser = await puppeteerCore.launch({
        args: [...chromium.args, "--no-sandbox"],
        executablePath: await chromium.executablePath(
          "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar"
        ),
        headless: true,
        defaultViewport: {
          width: 1920,
          height: 1080,
        },
      });
    } else {
      browser = (await puppeteer.launch({
        headless: false,
      })) as unknown as CoreBrowser;
    }

    environment.log.info("Browser launched successfully");
    environment.setBrowser(browser as unknown as import("puppeteer").Browser);
    const page = await browser.newPage();
    // page.setViewport({ width: 2560, height: 1440 });

    //this is to view bright data browser not required
    // const client = await page.createCDPSession();
    // await openDevtools(page, client);

    //this is bright data proxy
    // await page.authenticate({
    //   username: "brd-customer-hl_c5716a01-zone-scrape_flow",
    //   password: "q24tfbl7dr6q",
    // });

    await page.goto(websiteUrl);
    environment.setPage(page as unknown as import("puppeteer").Page);
    environment.log.info(`Opened page at ${websiteUrl}`);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
