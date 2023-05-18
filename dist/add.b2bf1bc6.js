const addTaskForm = document.querySelector("#add-new-task-form");
const validate = ()=>{
    if (addTaskForm.elements.title.value === "") {
        titleError.classList.toggle("title-error-show");
        titleError.classList.toggle("title-error");
        return false;
    } else return true;
};
const handleSubmit = (ev)=>{
    ev.preventDefault();
    if (validate()) console.log("inside submit");
};
addTaskForm.addEventListener("submit", handleSubmit);

//# sourceMappingURL=add.b2bf1bc6.js.map
