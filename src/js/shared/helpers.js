export const getIDFromUrl = () => {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get('id');
}

export const generateTodoLink = (todoId = '') => {
    const baseUrl = 'http://localhost:8000/todos';
    return todoId ? `${baseUrl}/${todoId}` : baseUrl;
};