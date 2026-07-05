const baseurl = process.env.NEXT_PUBLIC_BASE_URL
export const getCurrentUserCompany = async (UserID) => {
    const res = await fetch(`${baseurl}/api/register/company/get?UserID=${UserID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            cache: "no-store",
        }
    })
    return res.json()
}