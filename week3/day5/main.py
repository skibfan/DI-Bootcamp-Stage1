import todoclass
import todocontrols

def main():
    todoList = todocontrols.TodoControls.showList()
    # default_view(todoList)
    # viewOnlyDone(todoList)
    viewEverything(todoList)
    # viewOnlyImportant(todoList)

    






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

main()