// A simple object with properties and methods 
// Created using the object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log("draw");
    }
};

circle.draw();


//Factory Function
//Factory functions are functions that return an object
 function createCircle(radius){
    return {
        radius, //same thing as saying => radius: radius
        draw: function(){
            console.log("draw");
        }
    }
 }

 // Constructor Function
 // Constructor functions are functions that create objects

 function Circle(radius){
    console.log("this", this); //this is a reference to the object that is executing the piece of code
    this.radius = radius; //this is used instead of return to reference the object that is created;
    this.draw = function(){
        console.log("draw1");
    }
 }

 const another =  new Circle(1); //new keyword creates an empty object, sets "this" to point to that object and returns the object from the function

 console.log(another.constructor);
//Every object in JS has a constructor property that references the function that was used to create that object
//In this case, another.constructor will return a reference to the Circle function

/*
    For example an object created using the object literal syntax will have a constructor property that references the Object function

    const x = {};
    x.constructor; //returns Object() { [native code] }

    You can also create objects using the Object() constructor function
    const y = new Object();
    y.constructor; //returns Object() { [native code] }

    Other constructor functions include:
    new String(); //returns a string object 
    new Number(); //returns a number object
    new Boolean(); //returns a boolean object
    new Function(); //returns a function object
    new Array(); //returns an array object
    new RegExp(); //returns a regular expression object
    new Date(); //returns a date object
    new Error(); //returns an error object
    new Symbol(); //returns a symbol object
    new Map(); //returns a map object
    new Set(); //returns a set object
    new WeakMap(); //returns a weakmap object
    new WeakSet(); //returns a weakset object
    new ArrayBuffer(); //returns an arraybuffer object

    The constructor property is useful for checking the type of an object
    For example, you can use the instanceof operator to check if an object is an instance of a specific constructor function
    const x = {};
    x instanceof Object; //returns true
*/