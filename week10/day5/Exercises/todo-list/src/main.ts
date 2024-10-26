import { ListTemplate } from "./templates/ListTemplate";
import { FullList } from "./model/FullList";


const myfulllist = new FullList


const addToDo = (e: Event) => {
  e.preventDefault();
  console.log('wow');
  const newTask = document.getElementById('newtasktext') as HTMLInputElement
  console.log(newTask.value);
  
  if (newTask.value) {
    myfulllist.addToDo(newTask.value)
    
  }
  render()
  
}


const addnewtaskbut = document.getElementById('addButton') as HTMLButtonElement
addnewtaskbut.addEventListener('click', (event) => addToDo(event))

export const render = () => {
  const todolistHtml = document.getElementById('todolist') as HTMLDivElement
  todolistHtml.innerHTML = ''
  const listtoshow = new ListTemplate(myfulllist)
  listtoshow.loadTodo()
}
render()