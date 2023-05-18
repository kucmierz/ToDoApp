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
            <p>Completed: ${todo.completed}</p>
            <a href="/edit.html?id=${todo.id}">Edit</a>
            <a href="/detail.html?id=${todo.id}">Details</a>
            <a href="/delete.html?id=${todo.id}">Delete</a>
        </li>        
        `;
    });
}


getData('http://localhost:8000/todos').then(data => renderToDo(data));

