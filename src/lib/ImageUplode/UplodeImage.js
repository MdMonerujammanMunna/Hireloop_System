const ApiKey = process.env.NEXT_PUBLIC_IMGBB
// console.log(ApiKey)
export const ImageUpload = async (Image) => {
    const fromData = new FormData();
    fromData.append('image', Image);
    const ResUrl = await fetch(`https://api.imgbb.com/1/upload?key=${ApiKey}`, {
        method: 'POST',
        body: fromData
    })
    // console.log(`https://api.imgbb.com/1/upload?key=${ApiKey}`)
    const data = await ResUrl.json()
    // console.log(data)
    return data.data
}
