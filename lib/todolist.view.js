class TodoView {

    constructor() {
        this.addTodo = document.querySelector('#add_button')
        this.todoOutput = document.querySelector('#todo_output')
        this.addInput = document.querySelector('#add_input')
        this.not_done_button = document.querySelector('#not_done_button')
        this.completed_button = document.querySelector("#completed_button")
        this.all_todos_button = document.querySelector("#all_todos")

    }


    update(todos) {
        this.render(todos)
    }

    render(todos) {
        this.todoOutput = ''
        todos.forEach(todo => {
            let todoline = `<tr>
                <td>
                        ${todo.id}
                </td>
                <td>
                        ${tod.label}
                </td>
                    <input type="checkbox" name="done"> 
                
                    </tr>
            `
            this.todoOutput.appendChild(todoline)
        });
    }


}

export default TodoView;