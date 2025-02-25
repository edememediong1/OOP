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

/* x will be 20 and y will be 10 because they are independent of each other 

    When we copy x into y, we are copying the value of x into y and not the reference to x. So, when we change the value of x, the value of y will not change because they are independent of each other
*/

//Reference Data Types
let a = { value: 10 };
let b = a;

a.value = 20;
// console.log(a, b);

/* When we use an object, the object is not stored in the variable, it is stored at an address in the memory and the variable (a or b) stores the reference (ie. the memory address) to the object in the memory 

So, when we copy a into b, we are copying the reference to the object in the memory and not the object itself. So, when we change the value of a, the value of b will also change because they are both pointing to the same object in the memory.

This is why objects are called reference data types because they are dependent on each other


*/

//Primitives are copied by their value while objects are copied by their reference

//ANOTHER EXAMPLE
let number = 10;

function increase(number) {
    number = number + 1;
    // console.log(number);
}

increase(number);
// console.log(number)

/* The value of number will still be 10 because the number variable inside the increase function is a local variable and is independent of the number variable outside the function? */