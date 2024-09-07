// [2] === [2] 
// A: if this is a comparison of a reference to a single point in memory, then it will be true. 
// if it is two identical variables which reference to different parts of memory - false
// {} === {}
// A: if this is a comparison of a reference to a single point in memory, then it will be true. 
// if it is two identical variables which reference to different parts of memory - false


const object1 = { number: 5 }; // 5
const object2 = object1; // 5
const object3 = object2; // 5
const object4 = { number: 5}; //5

object1.number = 4; // 4
console.log(object2.number) // 4 - this references memory which is changed on line 14, thus is changed together with object1
console.log(object3.number) // 4 - this references memory which is changed on line 14, thus is changed together with object1
console.log(object4.number) // 5 - this references different memory, thus is unchanged by line 14


class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type
      this.color = color
    }
  };

  class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(sound) {
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
  }


  let farmerCow = new Mammal('Bob', 'Cow', 'White')

  console.log(farmerCow.sound('MOOOOOOOO'));
  