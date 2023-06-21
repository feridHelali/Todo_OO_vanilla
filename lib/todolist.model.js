class TodoListModel {


    // todo:{id:number,label:string,done:bollean}

    todoList = []

    observers = []

    constructor() {

    }

    registerView(observer) {
        this.observers.push(observer)
    }


    addTodo(todo) {
        this.todoList.push(todo)
        this.notify(this.todoList)
    }

    removeTodo(id) {
        this.todoList=this.todoList.filter( todo => todo.id !== id)
    }

    getUndoneToDos() {
        let undoneToDos=this.todoList.filter(todo=>!todo.done)
        this.notify(undoneToDos)
    }

    getCompletedToDos() {
      let completedTodo=this.completedTodo.filter(todo=>todo.done)
      this.notify(completedTodo)
    }

    toggleTodo(id) {
        this.todoList=this.todoList.map(todo => {
            if (todo.id===id){
                todo.done = !todo.done
            }
            return todo;
        })
        this.notify(this.todoList)
    }

    getAllToDos() {
        return this.todoList
    }

    notify() {
        this.observers.forEach(obs => obs.update(this.todoList))
    }


}


export default TodoListModel;