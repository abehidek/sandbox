'use strict'

/*
<label class="todo_item">
    <input type="checkbox">
    <div>Item 1</div>
    <input type="button" value="X">
</label>
*/

const criarItem = (taskName, taskStatus='') => {
    const item = document.createElement('label')
    item.classList.add('todo_item')
    item.innerHTML = 
    `
        <input type="checkbox" ${taskStatus}>
        <div>${taskName}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item)
}