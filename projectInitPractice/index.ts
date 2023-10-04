import { Person } from "../class";
import * as _ from 'lodash';
 
let foo = new Person('test', 1990);
console.log(foo);

// utilize lodash er shubidha
let arr: number[] = [1, 2, 3, 4, 5];
console.log(_.reverse(arr));