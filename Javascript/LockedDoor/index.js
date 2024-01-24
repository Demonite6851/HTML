let code = "";
let counter = 0;
let guesses = 5;
let doorCode = "2894";
let lastEntered = "";
let dooropen = false;
function addToCode(x) {
    if (guesses > 0) {
        if (dooropen == false) {
            if (counter < 4) {
                code += x
                counter += 1;
            }
            document.getElementById("codeDisplay").innerHTML = "Code Entered: " + code;
        }
    }
}
function clearCode() {
    if (guesses > 0) {
        if (dooropen == false) {
            code = "";
            lastEntered = "";
            counter = 0;
            document.getElementById("codeDisplay").innerHTML = "Code Entered: " + code;
            document.getElementById("codeDisplay").style.color = "snow";
        }
    }
}
function confirmCode() {
    if (guesses > 0) {
        if (lastEntered != code) {
            if (counter == 4) {
                if (code == doorCode) {
                    dooropen = true;
                    document.getElementById("guessCount").innerHTML = "Good job!";
                    document.getElementById("codeDisplay").innerHTML = "You opened the door!";
                    document.getElementById("guessCount").style.color = "mediumspringgreen";
                    document.getElementById("codeDisplay").style.color = "mediumspringgreen";
                    document.getElementById("doorImage").src = "doorOpened.jpg";
                }
                else {
                    lastEntered = code;
                    document.getElementById("codeDisplay").style.color = "tomato";
                    guesses -= 1;
                    document.getElementById("guessCount").innerHTML = "Guesses Remaining: " + guesses;
                    if (guesses == 0) {
                        document.getElementById("guessCount").innerHTML = "Out of guesses.";
                        document.getElementById("codeDisplay").innerHTML = "Try again later.";
                        document.getElementById("guessCount").style.color = "red";
                        document.getElementById("codeDisplay").style.color = "red";
                        document.getElementById("doorImage").src = "doorLocked.jpg";
                    }
                }
            }
        }
    }
}
function setCode() {
    if (counter == 4) {
        if (code != doorCode) {
            doorCode = code;
            clearCode();
        }
    }
}