export const getData = async (link) => {
    const response = await fetch(link);
    return await response.json();
}

export const saveData = async (link, data) => {
    const response = await fetch(link, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response;
}

export const addData = async (link, data) => {
    const response = await fetch(link, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response;
}

export const deleteData = async (link) => {
    const response = await fetch(link, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    return response;
}