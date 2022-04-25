"use strict";

let userInput

class invalidNumberError extends Error {}

function getUserInput() {
    try {
      userInput = parseInt(prompt("Provide an even number"));
  
      if (!userInput) {
        throw new invalidNumberError("Not a valid number");
      }

      else if (userInput % 2 !== 0){
        throw new invalidNumberError("Not an even number");
      }

      else {
        alert("Thanks for giving us a good number!")
      }
    } catch (e) {
      if (e instanceof invalidNumberError) {
        alert(e.message);
        getUserInput();
      } else {
        alert("An unexpected error occured");
      }
    }
  }

  getUserInput()
