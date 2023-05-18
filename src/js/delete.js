import { deleteData } from "./shared/connection";
import { getIDFromUrl, generateTodoLink } from "./shared/helpers";

const deleteToDo = async () => {
    const todoID = getIDFromUrl();
    const link = generateTodoLink(todoID);
    const response = await deleteData(link);
    if (response.ok) {
        window.location.href = '/index.html';
    }
}

deleteToDo();