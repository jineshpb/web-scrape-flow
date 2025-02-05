import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export async function getBrowser() {
  // These are the recommended args from Sparticuz/chromium
  const options = {
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(
      "https://github.com/Sparticuz/chromium/releases/download/v119.0.0/chromium-v119.0.0-pack.tar"
    ),
    headless: true,
  };

  try {
    const browser = await puppeteer.launch(options);
    return browser;
  } catch (error) {
    console.error("Failed to launch browser:", error);
    throw error;
  }
}
