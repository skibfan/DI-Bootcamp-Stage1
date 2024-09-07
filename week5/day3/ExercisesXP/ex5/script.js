class Dog {
    constructor(name) {
      this.name = name;
    }
  };

    // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };


    // 3
// class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };


// A: Technically speaking, both this variant will let you create a variable of class Labrador son of Dog.
// But, option #3 will not get it's name, thus the correct answer is #2.
// numbers #1 and #4 will not create new variable as they do not call for super.
  let tt = new Labrador("as", 'ff')
  console.log(tt);
  