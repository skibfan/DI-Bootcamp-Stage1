import { ToDoItem } from "./ListItem"
import {v4 as uuidv4} from 'uuid'

// export let localStorage: ToDoItem[] = []


// export class FullList {
//     public fullisttodo: ToDoItem[] = []
//     private static instance: FullList = new FullList();
//     // constructor(
//     //     public fullisttodo: ToDoItem[] = []
//     // ){}
    
    
//     // static loadLocalStorage(): ToDoItem[] {
//     //     return localStorage
//     // }


//     //  public saveLocalStorage() {
//     //     localStorage = this.fullisttodo
//     // }
//     public static getInstance(): FullList {
//         return FullList.instance;
//     }


//     public loadTasks() { 
//         return this.fullisttodo as ToDoItem[]
//     }
//     public saveTasks() {
//         localStorage = this.fullisttodo
//     }
//     public addToDo(item: string){
//         const id:string = uuidv4()
//         const checked = false
//         this.fullisttodo.push({id, item, checked} as ToDoItem)
//     }
//     public removeTodo(id: string) {
//         const newList = this.fullisttodo.filter(elem => elem.id !== id)
//         this.fullisttodo = newList
//     }
//     public clearList() {
//         this.fullisttodo = []
//     }
//     public toggletodo(id: string) {
//         this.fullisttodo.map(elem => {
//             if (elem.id == id) {
//                 elem.checked = !elem.checked
//             }
//             return {...elem}
//         })
//     }
// }



// export const myTodoList = new FullList
let localStorage:ToDoItem[] = []
export class FullList {
    private todos: ToDoItem[]
    constructor() {
        this.todos = this.loadTasks()
    }

    private loadTasks(): ToDoItem[] {
        if (localStorage) return localStorage
        return []
    }

    saveTasks() {
        localStorage = this.todos
    }

    addToDo(item: string){
        if (this.todos) {
            const id:string = uuidv4()
            const checked = false
            this.todos.push({id, item, checked} as ToDoItem)
        }
    }

    removeTodo(task: ToDoItem) {
        if (this.todos) {
            this.todos = this.todos.filter(elem => elem.id !== task.id)
        }
        this.saveTasks()
    }

    toggletodo(task: ToDoItem) {
        task.toggleToDo()
    }


    getToDos(): ToDoItem[] {
        if (this.todos) {return this.todos}
        else return []
        }

    cleartodolist() {
        this.todos = []
        this.saveTasks()
    }
}
