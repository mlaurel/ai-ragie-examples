import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.RAGIE_API_KEY;

if (!apiKey) {
    console.error("RAGIE_API_KEY is required");
    process.exit(1);
  }

const id = "8d4d9c11-4c1b-4f0e-bb08-511b5515782a";

const response = await fetch(`https://api.ragie.ai/documents/${id}`, {
  headers: { authorization: `Bearer ${apiKey}` },
});

const data = await response.json();

console.log(data);
