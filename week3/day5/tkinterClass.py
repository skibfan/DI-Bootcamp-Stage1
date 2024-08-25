import todoclass
import todocontrols
import tkinter as tk
from tkinter import messagebox

class TodoApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("To-Do List")
        self.geometry("700x600")
        
        self.todoList = todocontrols.TodoControls.showList()
        
        self.create_widgets()
    
    def create_widgets(self):
        self.listbox = tk.Listbox(self, height=15, width=50)
        self.listbox.grid(row=0, column=0, columnspan=2, pady=10, padx=10, sticky="nsew")
        
        scrollbar = tk.Scrollbar(self, orient="vertical", command=self.listbox.yview)
        scrollbar.grid(row=0, column=2, sticky="ns")
        self.listbox.configure(yscrollcommand=scrollbar.set)
        
        self.view_button = tk.Button(self, text="View Tasks", command=self.view_tasks)
        self.view_button.grid(row=1, column=0, pady=5, padx=5, sticky="ew")
        
        self.view_important = tk.Button(self, text="View Important", command=self.view_important)
        self.view_important.grid(row=2, column=0, pady=5, padx=5, sticky="ew")

        self.view_done = tk.Button(self, text="View Finished", command=self.view_done)
        self.view_done.grid(row=3, column=0, pady=5, padx=5, sticky="ew")

        self.view_all = tk.Button(self, text="View All", command=self.view_all)
        self.view_all.grid(row=4, column=0, pady=5, padx=5, sticky="ew")

        self.add_button = tk.Button(self, text="Add Task", command=self.add_task)
        self.add_button.grid(row=1, column=1, pady=5, padx=5, sticky="ew")

        self.delete_button = tk.Button(self, text="Delete Task", command=self.delete_task)
        self.delete_button.grid(row=2, column=1, pady=5, padx=5, sticky="ew")

        self.toggle_importance_button = tk.Button(self, text="Toggle Importance", command=self.toggle_importance)
        self.toggle_importance_button.grid(row=3, column=1, pady=5, padx=5, sticky="ew")

        self.toggle_done = tk.Button(self, text="Toggle Done", command=self.toggle_done)
        self.toggle_done.grid(row=4, column=1, pady=5, padx=5, sticky="ew")

        self.grid_columnconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=1)
        self.grid_rowconfigure(0, weight=1)

    def view_tasks(self):
        new_todoList = [item for item in self.todoList if not item[3]]
        self.printer(new_todoList)

    def view_important(self):
        new_todoList = [item for item in self.todoList if item[2] and not item[3]]
        self.printer(new_todoList)

    def view_done(self):
        new_todoList = [item for item in self.todoList if item[3]]
        self.printer(new_todoList)

    def view_all(self):
        self.printer(self.todoList)

    def printer(self, temp_todoList):
        self.listbox.delete(0, tk.END)
        importantTasks = [item for item in temp_todoList if item[2] and not item[3]]
        normalTasks = [item for item in temp_todoList if not item[2] and not item[3]]
        finishedTasks = [item for item in temp_todoList if item[3]]
        
        if importantTasks:
            self.listbox.insert(tk.END, 'Important tasks:')
            for task in importantTasks:
                self.listbox.insert(tk.END, f"• {task[1]}")
            self.listbox.insert(tk.END, '')
        
        if normalTasks:
            self.listbox.insert(tk.END, 'Normal tasks:')
            for task in normalTasks:
                self.listbox.insert(tk.END, f"• {task[1]}")
            self.listbox.insert(tk.END, '')
        
        if finishedTasks:
            self.listbox.insert(tk.END, 'Finished tasks:')
            for task in finishedTasks:
                self.listbox.insert(tk.END, f"• {task[1]}")
        
        if not (importantTasks or normalTasks or finishedTasks):
            self.listbox.insert(tk.END, 'No To-Do to show!')

    def add_task(self):
        add_window = tk.Toplevel(self)
        add_window.title("Add To-Do")
        
        tk.Label(add_window, text="Your new To-Do:").pack()
        task_entry = tk.Entry(add_window)
        task_entry.pack()
        
        importance_var = tk.BooleanVar()
        tk.Checkbutton(add_window, text="Important", variable=importance_var).pack()
        
        def save_task():
            task = task_entry.get()
            if task:
                new_note = todoclass.TodoList(task)
                new_note.save()
                if importance_var.get():
                    new_note.toggle_is_important(True)
                add_window.destroy()
                self.todoList = todocontrols.TodoControls.showList()
                self.view_tasks()
            else:
                messagebox.showwarning("Empty Task", "Please enter a task.")
        
        tk.Button(add_window, text="Save", command=save_task).pack()

    def delete_task(self):
        selected = self.listbox.curselection()
        if selected:
            task = self.listbox.get(selected[0])
            if task.startswith('• '):
                task = task[2:] 
                del_note = todoclass.TodoList(task)
                del_note.delete()
                self.todoList = todocontrols.TodoControls.showList()
                self.view_tasks()
        else:
            messagebox.showwarning("No Selection", "Please select a task to delete.")

    def toggle_importance(self):
        selected = self.listbox.curselection()
        if selected:
            task = self.listbox.get(selected[0])
            if task.startswith('• '):
                task = task[2:] 
                toggle_note = todoclass.TodoList(task)
                current_importance = todocontrols.TodoControls.showToDoItem(task)[2]
                toggle_note.toggle_is_important(not current_importance)
                self.todoList = todocontrols.TodoControls.showList()
                self.view_tasks()
        else:
            messagebox.showwarning("No Selection", "Please select a task to toggle importance.")

    def toggle_done(self):
        selected = self.listbox.curselection()
        if selected:
            task = self.listbox.get(selected[0])
            if task.startswith('• '):
                task = task[2:]
                toggle_note = todoclass.TodoList(task)
                is_done = todocontrols.TodoControls.showToDoItem(task)[3]
                toggle_note.is_done(not is_done)
                self.todoList = todocontrols.TodoControls.showList()
                self.view_tasks()
        else:
            messagebox.showwarning("No Selection", "Please select a task to toggle importance.")
