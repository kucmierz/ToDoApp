import { getIDFromUrl } from "./shared/helpers";
import { getData, saveData } from "./shared/connection";

const editForm = document.querySelector('#edit-form');
const titleError = document.querySelector('#title-error');

const renderEditForm = todo => {
    editForm.elements.id.value = todo.id;
    editForm.elements.title.value = todo.title;
    editForm.elements.description.value = todo.description;
    editForm.elements.due_date.value = todo.due_date;
    editForm.elements.completed.checked = todo.completed;
    editForm.elements.priority.value = todo.priority;
    editForm.elements.label.value = todo.label;
}

const link = `http://localhost:8000/todos/${getIDFromUrl()}`;
getData(link).then(data => renderEditForm(data));

const saveToDo = async () => {
    const editedToDo = {
        "id": editForm.elements.id.value,
        "title": editForm.elements.title.value,
        "description": editForm.elements.description.value,
        "due_date": editForm.elements.due_date.value,
        "completed": editForm.elements.completed.checked,
        "priority": editForm.elements.priority.value,
        "label": editForm.elements.label.value
    };
    const response = await saveData(link, editedToDo);
    if (response.ok) {
        window.location.href = '/index.html';
    }
}

const validate = () => {
    if (editForm.elements.title.value === '') {
        titleError.classList.toggle('title-error-show');
        titleError.classList.toggle('title-error');
        return false;
    } else {
        return true;
    }
}

const handleSubmit = ev => {
    ev.preventDefault();
    if (validate()) {
        saveToDo();
    }
}

editForm.addEventListener('submit', handleSubmit);