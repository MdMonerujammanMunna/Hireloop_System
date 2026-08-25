import { MongoClient, ObjectId } from "mongodb";

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

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return new Response(JSON.stringify({ error: "Invalid request body" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    if (typeof body.title !== "string" || !body.title.trim()) {
        return new Response(JSON.stringify({ error: "Job title is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const result = await jobsCollection.insertOne({
        ...body,
        title: body.title.trim(),
    });

    return new Response(
        JSON.stringify({ insertedId: result.insertedId }),
        {
            status: 201,
            headers: { "Content-Type": "application/json" },
        }
    );
}

export async function GET() {
    await connectClient();
    const jobs = await jobsCollection.find({}).sort({ createdAt: -1 }).toArray();

    return new Response(JSON.stringify(jobs), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function DELETE(request) {
    await connectClient();
    const { jobsId } = await request.json();

    if (!ObjectId.isValid(jobsId)) {
        return new Response(JSON.stringify({ error: "Invalid job id" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const result = await jobsCollection.deleteOne({ _id: new ObjectId(jobsId) });

    if (result.deletedCount === 0) {
        return new Response(JSON.stringify({ error: "Job not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ deletedCount: result.deletedCount }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
