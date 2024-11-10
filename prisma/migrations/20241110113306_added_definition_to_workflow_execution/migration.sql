-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workflowExecution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workflowId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "trigger" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" DATETIME,
    "completedAt" DATETIME,
    "definition" TEXT NOT NULL DEFAULT '{}',
    "creditsConsumed" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "workflowExecution_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "workflow" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_workflowExecution" ("completedAt", "createdAt", "creditsConsumed", "id", "startedAt", "status", "trigger", "userId", "workflowId") SELECT "completedAt", "createdAt", "creditsConsumed", "id", "startedAt", "status", "trigger", "userId", "workflowId" FROM "workflowExecution";
DROP TABLE "workflowExecution";
ALTER TABLE "new_workflowExecution" RENAME TO "workflowExecution";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
