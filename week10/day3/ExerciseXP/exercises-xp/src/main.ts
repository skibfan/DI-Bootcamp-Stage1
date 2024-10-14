
// ex1

type Person = {
  name: string,
  age: number
}
type Address = {
  street: string,
  city: string
}

type PersonWithAddress = Person & Address

const myperson: PersonWithAddress = {
  name: "Bob",
  age: 20,
  street: "Dizengoff",
  city: "Tel Aviv"
}
// console.log(myperson);

// ex2

const describeValue = (value: number | string) => {
  if (typeof value === 'number') return 'This is a number'
  if (typeof value === 'string') return 'This is a string'
  return 'error'
}
// console.log(describeValue('2'));

// ex3

const someValue: any = 'My string' as string

// console.log(typeof someValue);

// ex4

const getFirstElement = (arr: (number | string)[]): string => {
  return arr[0] as string
}
// console.log(getFirstElement([22, "hello", 42]));

// ex5

const logLength = <T>(value: T[] | string) => {
  console.log(value.length);
}

// logLength('asd')
// logLength(2)

// ex6


type Job = {
  position: string,
  department: string
}
type Employee = Person & Job

const describeEmployee = (myEmp: Employee) => {
  if (myEmp.position === 'Manager') return `${myEmp.name} is ${myEmp.position} at ${myEmp.department}`
  if (myEmp.position === 'Developer') return `${myEmp.name} is ${myEmp.position} at ${myEmp.department}`
}


// console.log(describeEmployee({name: 'Jack', age: 30, position:"Manager", department: 'Kiriya'}));

// ex7


const formatInput = <T extends {toString(): string}>(value: T): string => {
  return String(value)
}

// console.log(formatInput([2,3,4,]));

