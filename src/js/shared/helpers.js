export const getIDFromUrl = () => {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get('id');
}