import puppeteer from "puppeteer-core";
import chrome from "@sparticuz/chromium";

export async function getBrowser() {
  const executablePath = await chrome.executablePath();

  const browser = await puppeteer.launch({
    args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chrome.defaultViewport,
    executablePath: executablePath,
    headless: true,
  });

  return browser;
}
