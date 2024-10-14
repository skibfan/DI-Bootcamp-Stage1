type User = {
  type: 'user';
  name: string;
  age: number;
 };
 
 type Product = {
  type: 'product';
  id: number;
  price: number;
 };
 
 type Order = {
  type: 'order';
  orderId: string;
  amount: number;
 };


const handleData = (value: User | Product | Order) => {
  if (value.type === 'user') {
   return `Hello there, ${value.name} ${value.age}`
  } 
  else if (value.type == 'product') {
    return `This is a ${value.id} - ${value.price}`
    
  }
  else if (value.type === 'order') {
    return `Summary: ${value.orderId} - ${value.amount}`
  }
  else {
    return 'Please, only valid objects'
  }
}
