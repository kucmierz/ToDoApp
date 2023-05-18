import { addData } from "./shared/connection";
import { generateTodoLink } from "./shared/helpers";

const addTaskForm = document.querySelector('#add-new-task-form');
const titleError = document.querySelector('#title-error');

const validate = () => {
    if (addTaskForm.elements.title.value === '') {
        titleError.classList.toggle('title-error-show');
        titleError.classList.toggle('title-error');
        return false;
    } else {
        return true;
    }
}

const addNewTask = async () => {
    const newTask = {
        "title": addTaskForm.elements.title.value,
        "description": addTaskForm.elements.description.value,
        "due_date": addTaskForm.elements.due_date.value,
        "completed": addTaskForm.elements.completed.checked,
        "priority": addTaskForm.elements.priority.value,
        "label": addTaskForm.elements.label.value
    };
    const link = generateTodoLink();
    const response = await addData(link, newTask);
    if (response.ok) {
        window.location.href = '/index.html';
    }
}

const handleSubmit = ev => {
    ev.preventDefault();
    if (validate()) {
        addNewTask();
    }
}

addTaskForm.addEventListener('submit', handleSubmit);