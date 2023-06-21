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
            let todoLine=document.createElement('tr')
             todoLine.innerHTML = `<tr>
                <td data-id="${todo.id}" id="${todo.id}">
                        ${todo.id}
                </td>
                <td>
                        ${todo.label}
                </td>
                    <input type="checkbox" name="done" id=${todo.id}> 
                    <button>X</button>
                    </tr>
            `

            let toggleCheckBox =todoLine.childNodes[5]
            toggleCheckBox.addEventListener('change',e=>console.dir(e.target.id))
            this.todoOutput.appendChild(todoLine)
        });

        
    }




}

export default TodoView;