import TodoView from "./lib/todolist.view"
import TodoListModel from "./lib/todolist.model"

let todoModel = new TodoListModel()
let todoListView = new TodoView()


todoModel.registerView(todoListView)
console.log(todoModel)


todoListView.addTodo.addEventListener('click',(e)=>{
    let newTodo={
        id:todoModel.todoList.length+1,
        label:todoListView.addInput.value,
        done:false
    }
    todoModel.addTodo(newTodo)
})


