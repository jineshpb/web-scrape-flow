const {
  PrismaClient: SQLitePrisma,
} = require("../prisma/generated/sqlite-client");
const { PrismaClient } = require("@prisma/client");

const sqlitePrisma = new SQLitePrisma();
const postgresPrisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://postgres:gOrWHV3KhMdvVYKq2NvzzQi3jQkG9IbszLaRZ52xKvZiIWDjzXueX7Dn9jawEfoh@49.207.248.233:5432/postgres",
    },
  },
});

async function migrate() {
  try {
    console.log("Testing connections...");
    await sqlitePrisma.$connect();
    await postgresPrisma.$connect();
    console.log("Connections successful");

    // Migrate workflows
    const workflows = await sqlitePrisma.$queryRaw`SELECT * FROM workflow`;
    console.log(`Found ${workflows.length} workflows`);
    for (const workflow of workflows) {
      try {
        await postgresPrisma.$executeRaw`
          INSERT INTO workflow (
            "id", "userId", "name", "description", "definition", 
            "executionPlan", "creditsCost", "cron", "status", 
            "lastRunAt", "lastRunId", "lastRunStatus", "nextRunAt", 
            "createdAt", "updatedAt"
          ) VALUES (
            ${workflow.id}, ${workflow.userId}, ${workflow.name}, 
            ${workflow.description}, ${workflow.definition},
            ${workflow.executionPlan}, ${workflow.creditsCost}, 
            ${workflow.cron}, ${workflow.status},
            ${workflow.lastRunAt}, ${workflow.lastRunId}, 
            ${workflow.lastRunStatus}, ${workflow.nextRunAt},
            ${workflow.createdAt}, ${workflow.updatedAt}
          )
          ON CONFLICT ("id") DO NOTHING
        `;
      } catch (e) {
        console.log(`Skipping duplicate workflow: ${workflow.id}`);
      }
    }

    // Migrate workflowExecutions
    const executions =
      await sqlitePrisma.$queryRaw`SELECT * FROM workflowExecution`;
    console.log(`Found ${executions.length} executions`);
    for (const execution of executions) {
      try {
        await postgresPrisma.$executeRaw`
          INSERT INTO "workflowExecution" (
            "id", "workflowId", "userId", "trigger", "status",
            "createdAt", "startedAt", "completedAt", "definition",
            "creditsConsumed"
          ) VALUES (
            ${execution.id}, ${execution.workflowId}, ${execution.userId},
            ${execution.trigger}, ${execution.status}, ${execution.createdAt},
            ${execution.startedAt}, ${execution.completedAt}, ${execution.definition},
            ${execution.creditsConsumed}
          )
          ON CONFLICT ("id") DO NOTHING
        `;
      } catch (e) {
        console.log(`Skipping duplicate execution: ${execution.id}`);
      }
    }

    // Migrate credentials
    const credentials = await sqlitePrisma.$queryRaw`SELECT * FROM credential`;
    console.log(`Found ${credentials.length} credentials`);
    for (const cred of credentials) {
      try {
        await postgresPrisma.$executeRaw`
          INSERT INTO credential (
            "id", "userId", "name", "value", "createdAt"
          ) VALUES (
            ${cred.id}, ${cred.userId}, ${cred.name}, 
            ${cred.value}, ${cred.createdAt}
          )
          ON CONFLICT ("id") DO NOTHING
        `;
      } catch (e) {
        console.log(`Skipping duplicate credential: ${cred.id}`);
      }
    }

    // Migrate user balances
    const balances = await sqlitePrisma.$queryRaw`SELECT * FROM UserBalance`;
    console.log(`Found ${balances.length} user balances`);
    for (const balance of balances) {
      try {
        await postgresPrisma.$executeRaw`
          INSERT INTO "UserBalance" (
            "userId", "credits"
          ) VALUES (
            ${balance.userId}, ${balance.credits}
          )
          ON CONFLICT ("userId") DO NOTHING
        `;
      } catch (e) {
        console.log(`Skipping duplicate balance for user: ${balance.userId}`);
      }
    }

    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    console.error("Error details:", (error as Error).message);
  } finally {
    await sqlitePrisma.$disconnect();
    await postgresPrisma.$disconnect();
  }
}

migrate().catch(console.error);
