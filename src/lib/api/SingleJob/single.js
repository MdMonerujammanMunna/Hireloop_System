const baseurl = process.env.NEXT_PUBLIC_BASE_URL
export const GetOneJobs = async (id) => {
    const res = await fetch(`${baseurl}/api/jobs/${id}`, { cache: "no-store" })
    return res.json()
}