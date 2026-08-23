const baseurl = process.env.BETTER_AUTH_URL || "http://localhost:3000"
export const getCompanyJobs = async (companyId, status = "active") => {
    const res = await fetch(`${baseurl}/api/jobs?companyId=${companyId}`) //&status=${status}
    return res.json()
}