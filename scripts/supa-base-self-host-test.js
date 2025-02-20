require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://postgres:gOrWHV3KhMdvVYKq2NvzzQi3jQkG9IbszLaRZ52xKvZiIWDjzXueX7Dn9jawEfoh@49.207.248.233:5432/postgres",
    },
  },
});

// Test both anonymous and service role connections
async function testConnection() {
  try {
    console.log("Testing connection...");
    await prisma.$connect();
    console.log("Connection successful!");

    // Test query
    const result = await prisma.workflow.findMany({
      take: 1,
    });
    console.log("Query result:", result);

    // Test JWT auth
    console.log("\nTesting JWT Authentication:");
    console.log("ANON_KEY available:", !!process.env.ANON_KEY);
    console.log("SERVICE_ROLE_KEY available:", !!process.env.SERVICE_ROLE_KEY);
    console.log("JWT_SECRET available:", !!process.env.JWT_SECRET);
  } catch (error) {
    console.error("Connection failed:", error);
    console.error("Error details:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection().catch(console.error);
