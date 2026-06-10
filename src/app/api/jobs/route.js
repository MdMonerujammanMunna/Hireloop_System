import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("Hireloop_System");
const jobsCollection = db.collection("jobs");

async function connectClient() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
    }
}

export async function POST(request) {
    await connectClient();
    const body = await request.json();

    if (!body || typeof body !== "object") {
        return new Response(JSON.stringify({ error: "Invalid request body" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const result = await jobsCollection.insertOne(body);

    return new Response(
        JSON.stringify({ insertedId: result.insertedId }),
        {
            status: 201,
            headers: { "Content-Type": "application/json" },
        }
    );
}
