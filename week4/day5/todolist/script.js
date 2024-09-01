const tasks = []
let counter = 0

let title = document.getElementsByTagName('title')[0].innerHTML
let titleSpan = document.createElement('span')
titleSpan.textContent = title
titleSpan.classList.add('titleSpan')
document.body.insertBefore(titleSpan, document.body.firstElementChild)


function addTask(event) {
    event.preventDefault()
    let curTask = document.getElementById('todo')
    if (curTask.value.trim() != '') {
        let xElem = document.createElement('span')
        xElem.textContent = 'X'
        xElem.style.fontStyle = 'fa-solid fa-text'
        xElem.style.backgroundColor = 'indianred'
        xElem.style.color = 'white'
        xElem.style.padding = '0 5px'
        xElem.style.marginRight = '5px'
        xElem.style.cursor = 'pointer'
        
        
        let curText = document.createElement('span')
        curText.textContent = curTask.value


        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.name = 'checkbox'
        checkBox.id = counter
        counter++
        


        let taskLine = document.createElement('div')
        taskLine.style.marginBottom = '5px';
        
        taskLine.append(xElem)
        taskLine.append(checkBox)
        taskLine.append(curText)

        document.getElementsByClassName('listTasks')[0].append(taskLine)
        curTask.value = ''
        tasks.push(curTask.value)

        checkBox.addEventListener('change', function () {
            if (this.checked) {
                curText.style.textDecoration = 'line-through'
                curText.style.color = 'red'
            } else {
                curText.style.textDecoration = 'none'
                curText.style.color = 'black'
            }
        }
        )
        
    }

}

document.getElementById('submit').addEventListener('click', addTask)
