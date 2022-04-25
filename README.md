Steps#
In a new project with at least an html and js file, include "use strict"; on line 1 of your js file
Declare a variable for assigning user input called userInput
Create a class InvalidNumberError that extends the Error class
Define a function, getUserInput(), that starts with a try/catch block
Inside of the try block, assign userInput to the result of prompt("Provide an even number "). Parse the user's response as an integer before assigning to userInput
If the value of userInput is NaN, throw an error. Else, if the value of userInput is an odd number, throw an error as well with the appropriate message
If the value is even, alert a success or thank you message
In the catch block, alert a message that gives appropriate feedback to the user.
Have getUserInput() call itself to prompt the user again
Test your logic by initially calling getUserInput()
Summary#
Your program should prompt the user to enter an even number. If the number is even, it will alert a thank you message. If the number is not even, it will tell them, and prompt again and again until given an even number.