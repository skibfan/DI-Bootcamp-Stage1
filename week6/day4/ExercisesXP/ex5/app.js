import lodash from 'lodash'
import { multi, plus,minus,divide } from './math.js'

let arr = [1, 4, 4, 4, 9, 3, 2]
let sortedArr = lodash.uniq(arr)
console.log(sortedArr);


console.log(multi(arr[1], arr[3]));
console.log(minus(sortedArr[2], arr[2]));

