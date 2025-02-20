const {
  PrismaClient: SQLiteClient,
} = require("../prisma/generated/sqlite-client");
const {
  PrismaClient: PostgresClient,
} = require("../prisma/generated/postgres-client");

const sqlitePrisma = new SQLiteClient();
const neonPrisma = new PostgresClient();

async function migrate() {
  try {
    console.log("Testing connections...");
    await sqlitePrisma.$connect();
    await neonPrisma.$connect();
    console.log("Connections successful");

    // Migrate workflows
    const workflows = await sqlitePrisma.$queryRaw`SELECT * FROM workflow`;
    console.log(`Found ${workflows.length} workflows`);
    for (const workflow of workflows) {
      try {
        await neonPrisma.$executeRaw`
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
        await neonPrisma.$executeRaw`
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

    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    console.error("Error details:", (error as Error).message);
  } finally {
    await sqlitePrisma.$disconnect();
    await neonPrisma.$disconnect();
  }
}

migrate().catch(console.error);
