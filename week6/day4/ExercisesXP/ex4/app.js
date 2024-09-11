import { TodoList } from "./todo.js";


let myTasks = new TodoList()

myTasks.addTask("wow")
myTasks.addTask("OGO")
myTasks.completeTask('wow')
myTasks.listAllTasks()