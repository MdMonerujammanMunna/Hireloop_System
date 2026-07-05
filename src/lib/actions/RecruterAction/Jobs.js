"use server"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const CreateJobs = async (NewjobData) => {
    const res = await fetch(`${baseUrl}/api/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(NewjobData),
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error(`Job creation failed: ${res.status}`)
    }

    return await res.json()
}