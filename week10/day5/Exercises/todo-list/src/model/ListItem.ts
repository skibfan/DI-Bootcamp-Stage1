
interface ToDoI {
    id: string,
    item: string,
    checked: boolean
}


export class ToDoItem implements ToDoI {
    constructor(
        public id: string,
        public item: string,
        public checked: boolean,
    ){}

    // getId(): string { return this.id; }
    // getItem(): string { return this.item; }
    // getChecked(): boolean { return this.checked; }
    
    thattodo() {return [this.id, this.item, this.checked]}
    setId(value: string) {this.id = value; }
    curTodo(todo: string) {this.item = todo}
    toggleToDo() {this.checked = !this.checked}
}