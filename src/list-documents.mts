import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.RAGIE_API_KEY;

if (!apiKey) {
    console.error("RAGIE_API_KEY is required");
    process.exit(1);
}

const url = new URL("https://api.ragie.ai/documents");
url.searchParams.set("filter", JSON.stringify({ scope: "tutorial" }));

const response = await fetch(url, {
    headers: { authorization: `Bearer ${apiKey}` },
});

if (!response.ok) {
    throw new Error(
        "Failed to retrieve data from Ragie API: " + response.statusText
    );
}
const data = await response.json();

console.log(data);
