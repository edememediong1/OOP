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

 