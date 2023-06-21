class TodoListModel {


    // todo:{id:number,label:string,done:bollean}

    todolist = []

    observers = []

    constructor() {

    }

    registerView(observer) {
        this.observers.push(observer)
    }


    addTodo(todo) {
        this.todolist.push(todo)
        this.notifiy(this.todolist)
    }

    removeTodo(id) {
        this.todolist=this.todolist.filter( todo => todo.id !== id)
    }

    getUndoneTodos() {
        let undoneTodos=this.todolist.filter(todo=>!todo.done)
        this.notifiy(undoneTodos)
    }

    getCompletedTodos() {
      let completedTodo=this.completedTodo.filter(todo=>todo.done)
      this.notifiy(completedTodo)
    }

    toggleTodo(id) {
        this.todolist=this.todolist.map(todo => {
            if (todo.id===id){
                todo.done = !todo.done
            }
            return todo;
        })
        this.notifiy(this.todolist)
    }

    getAllTodos() {
        return this.todolist
    }

    notifiy() {
        this.observers.forEach(obs => obs.update(this.todolist))
    }


}


export default TodoListModel;