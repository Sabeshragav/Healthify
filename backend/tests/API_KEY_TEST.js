/**
 * Server restart script
 *
 * This utility script helps restart the server with a clean environment.
 * It also checks the API connection status to verify the setup.
 */

require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const logger = require("./config/logger");

// Basic test for API connectivity
async function testApiConnection() {
  try {
    console.log("Testing API connection...");

    // Try both API keys
    const genAI1 = new GoogleGenerativeAI(process.env.GEMINI_API_KEY1);
    const genAI2 = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

    // Test models
    const modelName = process.env.MODEL_NAME || "gemini-1.5-flash";

    console.log(`Testing primary API key with model: ${modelName}`);
    const model1 = genAI1.getGenerativeModel({ model: modelName });
    const result1 = await model1
      .generateContent(
        "Hello, this is a test message. Please respond with 'OK'."
      )
      .catch((err) => {
        console.log("Primary API key test failed:", err.message);
        return null;
      });

    if (result1) {
      console.log("✅ Primary API key is working correctly!");
    }

    console.log(`Testing secondary API key with model: ${modelName}`);
    const model2 = genAI2.getGenerativeModel({ model: modelName });
    const result2 = await model2
      .generateContent(
        "Hello, this is a test message. Please respond with 'OK'."
      )
      .catch((err) => {
        console.log("Secondary API key test failed:", err.message);
        return null;
      });

    if (result2) {
      console.log("✅ Secondary API key is working correctly!");
    }

    if (!result1 && !result2) {
      console.log(
        "❌ Both API keys failed. Please check your API keys and settings."
      );
      console.log("Common issues:");
      console.log("1. API quota exceeded - wait a few minutes and try again");
      console.log("2. Invalid API keys - check for typos in your .env file");
      console.log(
        "3. Gemini API service outage - check status page at https://status.gemini.google.com/"
      );
    }

    return result1 || result2 ? true : false;
  } catch (error) {
    console.error("Error testing API connection:", error);
    return false;
  }
}

// Start the server
async function startServer() {
  try {
    console.log("Starting server...");
    require("./server.js");
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Main execution
async function main() {
  console.log("Checking environment...");
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`MODEL_NAME: ${process.env.MODEL_NAME || "Not set"}`);

  const apiWorking = await testApiConnection();

  if (apiWorking) {
    startServer();
  } else {
    console.log("Please fix the API issues before starting the server.");
    process.exit(1);
  }
}

main();
