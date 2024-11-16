import { waitFor } from "@/lib/helper/waitFor";
import { Environment, ExecutionEnvironment } from "@/types/executor";
import puppeteer from "puppeteer";
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
    const browser = await puppeteer.launch({
      headless: false, //for testing
      //this is bright data proxy
      // args: ["--proxy-server=brd.superproxy.io:22225"],
    });

    //enable above and disable below to use own browser
    // const browser = await puppeteer.connect({
    //   browserWSEndpoint: BROWSER_WS,
    // });

    environment.log.info("Browser launched successfully");
    environment.setBrowser(browser);
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
    environment.setPage(page);
    environment.log.info(`Opened page at ${websiteUrl}`);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
