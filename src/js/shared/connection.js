export const getData = async (link) => {
    const response = await fetch(link);
    return await response.json();
}