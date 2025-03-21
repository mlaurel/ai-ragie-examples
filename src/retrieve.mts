import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.RAGIE_API_KEY;

if (!apiKey) {
    console.error("RAGIE_API_KEY is required");
    process.exit(1);
  }

const response = await fetch("https://api.ragie.ai/retrievals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + apiKey,
  },
  body: JSON.stringify({
    query: "davos",
    filter: {
      $or: [{ scope: { $eq: "tutorial" } }, { scope: { $eq: "production" } }],
    },
  }),
});

const data = await response.json();
data.scored_chunks.forEach((chunk) => {
  console.log(chunk);
});
