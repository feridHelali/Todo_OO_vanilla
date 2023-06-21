import TodoView from "./lib/todolist.view"
import TodoListModel from "./lib/todolist.model"

const todoModel = new TodoListModel()
const todoListView = new TodoView()


todoModel.registeView(todoListView)
console.log(todoModel)


todoListView.addTodo.addEventListener('click',(e)=>{
    let newTodo={
        id:todoModel.todolist.length+1,
        label:todoListView.addInput.value,
        done:false
    }
    todoModel.addTodo(newTodo)
})


