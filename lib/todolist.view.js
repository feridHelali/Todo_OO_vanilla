class TodoView {

    constructor() {
        this.addTodo = document.querySelector('#add__todo__button')
        this.todoOutput = document.querySelector('#todo_output')
        this.addInput = document.querySelector('#add_input')
        this.not_done_button = document.querySelector('#not_done_button')
        this.completed_button = document.querySelector("#completed_button")
        this.all_todos_button = document.querySelector("#all_todos")

    }


    update(toDos) {
        this.render(toDos)
    }

    
    render(toDos) {
        this.todoOutput.innerHTML = ''
        toDos.forEach(todo => {
            let todoLine = document.createElement('tr')
            todoLine.innerHTML = `<tr>
                <td data-id="${todo.id}" id="${todo.id}">
                        ${todo.id}
                </td>
                <td >
                ${todo.label}
                </td >
                <td class="actions">
                <input type="checkbox" name="done" id=${todo.id}> 
                <button id=${todo.id}>X</button>
                </td>
                </tr>
                `
                this.todoOutput.appendChild(todoLine)
            });
    }
    
    attachListenerToTodoLines(todoModel) {
        document.querySelector('#todo_output').childNodes.forEach(todoLine => {
            console.dir(todoLine.childNodes[5].childNodes[1])
            console.dir(todoLine.childNodes[5].childNodes[3])
        
            let toggleCheckBox = todoLine.childNodes[5].childNodes[1]
            let removeTodoButton = todoLine.childNodes[5].childNodes[3]
            toggleCheckBox.addEventListener('change', e => {
                todoModel.toggleTodo(e.target.id)
            })
            removeTodoButton.addEventListener('click', e => {
                todoModel.removeTodo(e.target.id)
            })
        })
    }
}

export default TodoView;