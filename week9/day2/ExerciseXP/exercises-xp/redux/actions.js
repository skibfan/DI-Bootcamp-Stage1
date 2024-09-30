
export const ADD = 'Adding a new to-do'
export const DEL = 'todododoDELETE'
export const DONE = 'toggleDONE'


export const addToDo = (value) => {
    return {
        type: ADD,
        payload: value
    }
}

export const delToDo = (id) => {
    return {
        type: DEL, 
        payload: id
    }
}

export const doneToDo = (id) => {
    return {
        type: DONE,
        payload: id
    }
}
