/* Value Data Types(Primitive) and Reference Data Type(Objects and Functions)

 => Value Data Types(Primitive) ie; Number, String, Boolean, Symbol, undefined, null
 => Reference Data Types ie; Objects, Functions, Arrays

 Value Data Types are independent of each other while Reference Data Types are dependent on each other

    **Value Data Types are stored in the stack while Reference Data Types are stored in the heap**

    **Stack** - stores primitive data types and has a fixed size
    **Heap** - stores reference data types and has a dynamic size
 */

//Primitive Data Types
let x = 10;
let y = x;

x = 20;
// console.log(x, y);

/* x will be 20 and y will be 10 because they are independent of each other */

//Reference Data Types
let a = { value: 10 };
let b = a;

a.value = 20;
console.log(a, b);

/* When we use an object, the object is not stored in the variable, it is stored at an address in the memory and the variable (a or b) stores the reference (ie. the memory address) to the object in the memory */