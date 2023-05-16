import { getData } from "./shared/connection";

const todoList = document.querySelector('#todos');

const renderToDo = collection => {
    todoList.innerHTML = '';
    collection.forEach(todo => {
        todoList.innerHTML += `
        <li>
            <h3>${todo.title}</h3>
            <p>Termin: ${todo.due_date}</p>
            <p>Priorytet: ${todo.priority}</p>
            <a href="/edit/2">Edit</a>
            <a href="/detail.html?id=${todo.id}">Details</a>
            <a href="/delete/2">Delete</a>
        </li>        
        `;
    });
}


getData('http://localhost:8000/todos').then(data => renderToDo(data));

