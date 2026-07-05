// /api/register/company
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const RegisterNewCompany = async (companiesData) => {
    const Callapi = await fetch(`${baseUrl}/api/register/company`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(companiesData)
    })
    if (!Callapi.ok) {
        throw new Error(`Company creation failed: ${Callapi.status}`)
    }
    return await Callapi.json()
}