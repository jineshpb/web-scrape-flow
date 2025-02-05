import puppeteer from "puppeteer-core";
import chrome from "@sparticuz/chromium";

export async function getBrowser() {
  const executablePath = await chrome.executablePath();

  const browser = await puppeteer.launch({
    args: [
      ...chrome.args,
      "--hide-scrollbars",
      "--disable-web-security",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
    defaultViewport: chrome.defaultViewport,
    executablePath: executablePath,
    headless: true,
    ignoreDefaultArgs: ["--disable-extensions"],
  });

  return browser;
}
