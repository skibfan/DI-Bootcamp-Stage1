const people = ["Greg", "Mary", "Devon", "James"];


// PART I
// 1
index1 = people.indexOf("Greg")
people.splice(index1, 1)
// 2
index2 = people.indexOf("James")
people.splice(index2, 1, "Jason")
// 3
people.push("Daniel")
// 4
index3 = people.indexOf("Mary")
console.log(index3)

// 5
let new_people = people.slice(1, -1)
console.log(new_people)

// 6
index4 = people.indexOf("Foo")
console.log(index4) // returns -1 for any non-existing elements in array

// 7
index5 = people.lastIndexOf("Daniel")
console.log(people.length)
console.log(index5)
// as in (probably) any other programming language - indexing goes from 0 whilst lenght counts actual number of elements.
// thus, expected result is: lastIndex + 1 = length
console.log("PART II:")
// PART II
// 1
for (i in people) {
    console.log(people[i])
}

// 2
console.log("2nd:")
for (u = 0; u < people.length; u++){
    console.log(people[u])
    if (people[u] == "Devon"){
        break
    }
}