"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'green'; // TODO: change this to your favorite color from the list

if (color == 'red') {
	console.log ("Red is the color of cherries");

}	else if (color == 'orange') {
	console.log ("Orange is the color of oranges lol");

}	else if (color == 'yellow') {
	console.log ("Yellow is the color of bananas");

}	else if (color == 'green') {
	console.log ("Green is the color of spinach");

}	else if (color == 'blue') {
	console.log ("Blue is the color of the ocean");

}	else {
	console.log (color + "? I don't know any things of that color");

} 

(color == favorite) ? console.log ("This is your favorite color!") : console.log ("This is not your favorite color");





// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
