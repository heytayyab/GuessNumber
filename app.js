var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")
// Get the input field
var input = document.getElementById("guess");


var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("my_btn").click();
    }
  });

  
function play(){
    var user_guess = document.getElementById("guess").value;
  
    if(user_guess < 1 || user_guess > 100 ){
        alert("Please Enter  a number Between 1 to 100");
    }
    else{
        guesses_num.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Your Guess is Too low"
            msg2.textContent = "No. Of Guesses : " +
            no_of_guesses;
            msg3.textContent = "Guessed Number Are: " +
            guesses_num;
        }
        else if(user_guess  > answer){
            msg1.textContent = "Your Guess is Too High"
            msg2.textContent = "No. Of Guesses : " +
            no_of_guesses;
            msg3.textContent = "Guessed Number Are: " +
            guesses_num;
        }
        else if(user_guess == answer){
            msg1.textContent = "Yahhhh You won It!!"
            msg2.textContent = "The number was " + answer
            msg3.textContent = " You guessed it in  " +   no_of_guesses   +" Guesses"; 
            
            // Disable the button
            document.getElementById("yourButtonId").disabled = true;
        }
    }

    // Clear the input box
    document.getElementById("guess").value = "";
}

