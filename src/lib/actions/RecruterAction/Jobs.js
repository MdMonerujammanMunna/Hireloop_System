"use server"
const baseUrl = process.env.BETTER_AUTH_URL || "http://localhost:3000"
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

export const DeleteJobModal = async (jobsId) => {
    const res = await fetch(`${baseUrl}/api/jobs/delete/HowCreatethis`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            cache: "no-store",
        },
        body: JSON.stringify({ jobsId }),
    })

    if (!res.ok) {
        throw new Error(`Job deletion failed: ${res.status}`)
    }

    return await res.json()
}