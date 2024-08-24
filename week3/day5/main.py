import todoclass
import todocontrols

def main():
    todoList = todocontrols.TodoControls.showList()
    # default_view(todoList)
    # viewOnlyDone(todoList)
    # viewEverything(todoList)
    # viewOnlyImportant(todoList)
    flag = True
    while flag:
        user_input = input(view_menu())
        if user_input.lower() == 'd':
            default_view(todoList)
        elif user_input.lower() == 'f':
            viewOnlyImportant(todoList)
        elif user_input.lower() == 'c':
            viewOnlyDone(todoList)
        elif user_input.lower() == 'a':
            viewEverything(todoList)
        elif user_input.lower() == 'm':
            management_menu()
            todoList = todocontrols.TodoControls.showList()
        elif user_input.lower() == 'q':
            flag = False
        




def default_view(todoList):
    todoList.sort(key=lambda x: x[2], reverse=True)
    todoList = [item for item in todoList if not item[3]]
    printer(todoList)


def viewOnlyDone(todoList):
    todoList = [item for item in todoList if item[3]]
    printer(todoList)
    
def viewOnlyImportant(todoList):
    todoList = [item for item in todoList if item[2]]
    printer(todoList)

def viewEverything(todoList):
    todoList.sort(key=lambda x: (x[2], x[3]), reverse=True)
    printer(todoList)


def printer(todoList):
    counter = 0
    importantTasks = [item for item in todoList if item[2] and not item[3]]
    normalTasks = [item for item in todoList if not item[2] and not item[3]]
    finishedTasks = [item for item in todoList if item[3]]
    if len(importantTasks) > 0:
        counter = 1
        print('Here are your important tasks:')
        for i in importantTasks:
            print(counter, i[1])
            counter += 1
    
    if len(normalTasks) > 0:
        counter = 1
        print('Here are your normal tasks:')
        for i in normalTasks:
            print(counter, i[1])
            counter += 1

    if len(finishedTasks) > 0:
        counter = 1
        print('Here are your finished tasks:')
        for i in finishedTasks:
            print(counter, i[1])
            counter += 1
    if counter == 0:
        print('There is no such tasks to show you!')


def management_menu():
    # add
    # delte
    # update
    flag = True
    
    while flag:
        user_input = input(management_line())
        if user_input.lower() == 'a':
            add_note()
        elif user_input.lower() == 'd':
            del_note()
        elif user_input.lower() == 't':
            toggle_importance()
        elif user_input.lower() == 'c':
            toggle_done()
        elif user_input.lower() == 'q':
            flag = False



def add_note():
    try:
        note = input('What do you want To Do: ')
        new_note = todoclass.TodoList(note)
        new_note.save()
        is_important = input('Is it important task (Y/N): ')
        if is_important.lower == 'y':
            new_note.toggle_is_important(True)
        print('Your note has been added successfully.')
    except:
        print("Your note was not added.")

def del_note():
    user_input = input('Which note do you want to delete: ')
    del_note = todoclass.TodoList(user_input)
    del_note.delete()
    if todocontrols.TodoControls.showToDoItem(del_note):
        print('Some error occurred')
    else:
        print("Deleted sucessfuly")


def toggle_importance():
    user_input = input("Which note's importance do you want to change: ")
    toggle_note = todoclass.TodoList(user_input)
    if todocontrols.TodoControls.showToDoItem(user_input)[2] == False:
        toggle_note.toggle_is_important(True)
    else:
        toggle_note.toggle_is_important(False)


def toggle_done():
    user_input = input("Which task have you finished (or want to do again): ")
    toggle_note = todoclass.TodoList(user_input)
    if todocontrols.TodoControls.showToDoItem(user_input)[3] == False:
        print(todocontrols.TodoControls.showToDoItem(user_input)[3])
        toggle_note.is_done(True)
    else:
        print(todocontrols.TodoControls.showToDoItem(user_input)[3])
        toggle_note.is_done(False)


def view_menu():
    return '''You are in the controls menu of your To-Do List.
Please, select your next action:
To view your to-do list - (D)
To view your important tasks - (F)
To view your completed tasks - (C)
To view all tasks - (A)
To manage your list - (M)
To quit the program - (Q)
Your choice: '''

def management_line():
    return '''You are in a management menu, select your next action:
Add note - (A)
Delete note - (D)
Change importance - (T)
Change completion - (C)
Back to main menu - (Q)
Your choice: '''

main()