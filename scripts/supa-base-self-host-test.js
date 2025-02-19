import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    // Test connection
    await prisma.$connect();
    console.log("Connection successful!");

    // Test query
    const result = await prisma.workflow.findMany({
      take: 1,
    });
    console.log("Query result:", result);
  } catch (error) {
    console.error("Connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
