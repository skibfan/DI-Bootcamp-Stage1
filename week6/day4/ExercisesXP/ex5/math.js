
export const multi = (a,b) => {return a*b}
export const divide = (a,b) => {
    if (a === 0) {
        throw new Error('no 0 allowed')
    } else {
        return a/b
    }
}
export const plus = (a,b) => {return a+b}
export const minus = (a,b) => {return a-b}