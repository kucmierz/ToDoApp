import { getIDFromUrl } from "./shared/helpers";
import { getData } from "./shared/connection";

const todoDetail = document.querySelector('#todo-detail');

const renderToDo = (todo) => {
    todoDetail.innerHTML = `
    <li>
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>Due date: ${todo.due_date}</p>
        <p>Completed: ${todo.completed}</p>
        <p>Priority: ${todo.priority}</p>
        <p>Label: ${todo.label}</p>
        <a href="/edit.html?${todo.id}">Edit</a>
        <a href="/index.html">Main page</a>
        <a href="/delete.html?${todo.id}">Delete</a>
    </li>    
    `;
}

const link = `http://localhost:8000/todos/${getIDFromUrl()}`;
getData(link).then(data => renderToDo(data));

