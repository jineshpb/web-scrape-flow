import { ExecutionEnvironment } from "@/types/executor";
import { BatchProcessLinksTask } from "../task/BatchProcessLinks";
import { Cluster } from "puppeteer-cluster";
import chromium from "@sparticuz/chromium-min";

export async function BatchProcessLinksExecutor(
  environment: ExecutionEnvironment<typeof BatchProcessLinksTask>
): Promise<boolean> {
  try {
    const links =
      environment
        .getInput("Links")
        ?.split(",")
        .map((l) => l.trim()) || [];
    const selectorsInput = environment.getInput("Selectors");
    const concurrency = parseInt(environment.getInput("Concurrency") || "2");

    if (!selectorsInput) {
      environment.log.error("Selectors input is required");
      return false;
    }

    // Split selectors by comma, but not if the comma is within a :has() or other CSS function
    const selectors = selectorsInput
      .split(/,(?![^(]*\))/) // Split by comma only if not within parentheses
      .map((s) => s.trim())
      .filter(Boolean);

    if (!selectors.length) {
      environment.log.error("At least one selector is required");
      return false;
    }

    environment.log.info(`Processing with selectors: ${selectors.join(", ")}`);

    environment.log.info("Initializing browser cluster...");

    const clusterOptions = {
      concurrency: Cluster.CONCURRENCY_CONTEXT,
      maxConcurrency: Math.min(concurrency, 4),
      timeout: 10000000, // Increased timeout as suggested
      retryLimit: 1,
      puppeteerOptions: {
        args: [
          "--no-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--disable-setuid-sandbox",
          "--disable-software-rasterizer",
          "--headless=new",
          "--disable-extensions",
          "--window-size=1920,1080",
          "--disable-web-security",
          "--no-first-run",
          "--disable-notifications",
          "--disable-background-timer-throttling",
          "--disable-backgrounding-occluded-windows",
          "--disable-breakpad",
          "--enable-features=NetworkService,NetworkServiceInProcess",
        ],
        executablePath: await chromium.executablePath(
          "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar"
        ),
        headless: true,
        ignoreHTTPSErrors: true,
        defaultViewport: chromium.defaultViewport,
      },
      monitor: true,
    };

    // Add error handling for browser launch
    try {
      const cluster = await Cluster.launch(clusterOptions);
      environment.log.info("Browser cluster launched successfully");

      // Add monitoring for better visibility
      cluster.on("taskerror", (err, data) => {
        environment.log.error(`Error crawling ${data}: ${err.message}`);
      });

      const results: string[] = [];
      let failedCount = 0;
      let processedCount = 0;
      let combinedHtml = "";

      await cluster.task(async ({ page, data: url }) => {
        try {
          await page.setDefaultNavigationTimeout(30000);
          await page.setDefaultTimeout(30000);

          await page.goto(url, {
            waitUntil: "networkidle0",
            timeout: 30000,
          });

          let pageHtml = "";
          for (const selector of selectors) {
            try {
              await page.waitForSelector(selector, { timeout: 5000 });
              const elements = await page.$$(selector);
              if (elements.length) {
                for (const element of elements) {
                  const html = await page.evaluate(
                    (el) => el.outerHTML,
                    element
                  );
                  pageHtml += `\n<!-- Selector: ${selector} -->\n${html}`;
                }
                environment.log.info(
                  `Found ${elements.length} elements with selector: ${selector}`
                );
              } else {
                environment.log.error(
                  `No elements found for selector: ${selector}`
                );
              }
            } catch (error) {
              environment.log.error(
                `Selector "${selector}" failed on ${url}: ${
                  (error as Error).message
                }`
              );
            }
          }

          if (pageHtml) {
            results.push(`Success: ${url}`);
            combinedHtml += `\n<!-- Page: ${url} -->\n${pageHtml}`;
            processedCount++;
            environment.log.info(`Successfully processed ${url}`);
          } else {
            failedCount++;
            results.push(`Failed: No content found at ${url}`);
            environment.log.error(`No content found at ${url}`);
          }
        } catch (error) {
          failedCount++;
          environment.log.error(
            `Failed processing ${url}: ${
              error instanceof Error ? error.message : "Unknown error"
            }`
          );
          results.push(`Failed: ${url}`);
        }
      });

      for (const link of links) {
        await cluster.queue(link.trim());
      }

      // Add proper cleanup
      try {
        await cluster.idle();
      } finally {
        await cluster.close();
      }

      environment.setOutput("Results", results.join(","));
      environment.setOutput("ProcessedCount", processedCount.toString());
      environment.setOutput("FailedCount", failedCount.toString());
      environment.setOutput("Html", combinedHtml.trim());

      return true;
    } catch (error: any) {
      if (error instanceof Error) {
        environment.log.error(`Browser launch failed: ${error.message}`);
      } else {
        environment.log.error("Browser launch failed: Unknown error");
      }
      // Try alternative launch method if first attempt fails
      clusterOptions.puppeteerOptions.args.push(
        "--disable-features=site-per-process",
        "--no-zygote"
      );
      const cluster = await Cluster.launch(clusterOptions);
      environment.log.info("Browser cluster launched with fallback options");

      // Add monitoring for better visibility
      cluster.on("taskerror", (err, data) => {
        environment.log.error(`Error crawling ${data}: ${err.message}`);
      });

      const results: string[] = [];
      let failedCount = 0;
      let processedCount = 0;
      let combinedHtml = "";

      await cluster.task(async ({ page, data: url }) => {
        try {
          await page.setDefaultNavigationTimeout(30000);
          await page.setDefaultTimeout(30000);

          await page.goto(url, {
            waitUntil: "networkidle0",
            timeout: 30000,
          });

          let pageHtml = "";
          for (const selector of selectors) {
            try {
              await page.waitForSelector(selector, { timeout: 5000 });
              const elements = await page.$$(selector);
              if (elements.length) {
                for (const element of elements) {
                  const html = await page.evaluate(
                    (el) => el.outerHTML,
                    element
                  );
                  pageHtml += `\n<!-- Selector: ${selector} -->\n${html}`;
                }
                environment.log.info(
                  `Found ${elements.length} elements with selector: ${selector}`
                );
              } else {
                environment.log.error(
                  `No elements found for selector: ${selector}`
                );
              }
            } catch (error) {
              environment.log.error(
                `Selector "${selector}" failed on ${url}: ${
                  (error as Error).message
                }`
              );
            }
          }

          if (pageHtml) {
            results.push(`Success: ${url}`);
            combinedHtml += `\n<!-- Page: ${url} -->\n${pageHtml}`;
            processedCount++;
            environment.log.info(`Successfully processed ${url}`);
          } else {
            failedCount++;
            results.push(`Failed: No content found at ${url}`);
            environment.log.error(`No content found at ${url}`);
          }
        } catch (error) {
          failedCount++;
          environment.log.error(
            `Failed processing ${url}: ${
              error instanceof Error ? error.message : "Unknown error"
            }`
          );
          results.push(`Failed: ${url}`);
        }
      });

      for (const link of links) {
        await cluster.queue(link.trim());
      }

      // Add proper cleanup
      try {
        await cluster.idle();
      } finally {
        await cluster.close();
      }

      environment.setOutput("Results", results.join(","));
      environment.setOutput("ProcessedCount", processedCount.toString());
      environment.setOutput("FailedCount", failedCount.toString());
      environment.setOutput("Html", combinedHtml.trim());

      return true;
    }
  } catch (error: any) {
    environment.log.error(`Cluster error: ${error.message}`);
    return false;
  }
}
