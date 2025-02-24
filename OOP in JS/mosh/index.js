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

 const another =  Circle(1); //new keyword creates an empty object, sets "this" to point to that object and returns the object from the function