import { products } from "./products.js";



const searchProd = (product) => {
    return products.find(elem =>  elem.name === product)
}


const printer = (product) => {
    if (product) {
        console.log(product.name, product.price, product.category,); 
      } else {
        console.log("Product not found");
      }  
}


printer(searchProd('Laptop'))
printer(searchProd('Smartphone'))
printer(searchProd('Headphones'))