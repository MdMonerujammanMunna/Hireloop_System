export const ImageUpload = async (Image) => {
    const fromData = new FormData();
    fromData.append('image', Image);
    const ResUrl = await fetch(`https://api.imgbb.com/1/upload?key=71a98fc5cb14b6f341e59f98b7673d1d`, {
        method: 'POST',
        body: fromData
    })
    const data = await ResUrl.json()
    return data.data
}
