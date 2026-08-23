const baseurl = process.env.NEXT_PUBLIC_BASE_URL
export const getAllJobs = async () => {
    const res = await fetch(`${baseurl}/api/alljobs`, { cache: "no-store" })
    return res.json()
}