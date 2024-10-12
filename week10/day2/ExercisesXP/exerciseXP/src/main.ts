class Employee {
  constructor(
    private name: string,
    private salary: number,
    public position: string,
    protected department: string
  ){}

  public getEmployeeInfo() {
    return `${this.name} ${this.position}`
  }

}


class Product {
  constructor(
    readonly id: number, 
    public name: string, 
    public price: number
  ){}

  getProductInfo() {
    return `${this.name} ${this.price}`
  }
}


const myP = new Product(3, 'wowish', 35)
// console.log(myP.id);
// myP.id = 4



class Animal {
  constructor(
    public name: string,
  ){}

  makeSound() {
    return `${this.name} makes animal sounds`
  }
}


class Dog extends Animal {

  makeSound(): string {
    return `bark`
  }
}

const myDoge = new Dog('Bob')
console.log(myDoge.makeSound());


class Calculator {
  static add(a:number, b: number):number {
    return a + b
  }
  static subtract(a:number, b: number):number {
    return a - b 
  }
}

console.log(Calculator.add(3, 2));
console.log(Calculator.subtract(3, 2));


interface User {
  readonly id: number, 
   name: string,
   email: string
}


class PremiumUser implements User {
  constructor(
    readonly id: number,
    public name: string,
    public email: string,
    public membershipLevel?: string
  ){}
}

const printUserDetails = (curUser: PremiumUser) => {
  console.log(`id -> ${curUser.id}
    name -> ${curUser.name}
    email -> ${curUser.email}
    membership level -> ${curUser.membershipLevel ? curUser.membershipLevel  : 'nolevel'}
    `);
  
}

const supauza = new PremiumUser(3, 'Jack', 'jack@gmail.com')
printUserDetails(supauza)