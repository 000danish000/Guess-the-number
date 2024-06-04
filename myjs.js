let randomNumber = parseInt(Math.floor(Math.random() * 100));
const randomDiv = document.querySelector(".random");
randomDiv.innerHTML = randomNumber;
const submit = document.getElementById("submit");
const inputnumber = document.querySelector(".inputnumber");
const wrongresult = document.querySelector(".wrongresult");
const result = document.querySelector(".result");
const previousGuesses = document.querySelector(".previousguesses");
const remainingAttempts = document.querySelector(".remainingattempts");
const previousNumberArray = [];
const restartGameButton = document.getElementById("restartGame");
restartGameButton.style.display = "none";
const disableSubmit = () => {
    submit.setAttribute("disabled", "");
    inputnumber.value = "";
    submit.style.backgroundColor = "#212121";
    submit.style.color = "#414141";
    restartGameButton.style.display = "block";
    randomDiv.style.filter = "drop-shadow(2px 4px 6px black)";
}
const enableSubmit = () => {
    submit.removeAttribute("disabled");
    submit.style.backgroundColor = "#f1f1f1";
    submit.style.color = "#212121";
    restartGameButton.style.display = "none";
}

const restartGame = () => {
    inputnumber.value = "";
    wrongresult.innerHTML = "";
    result.innerHTML = "";
    previousGuesses.innerHTML = "";
    remainingAttempts.innerHTML = "";
    previousNumberArray.length = 0;
    enableSubmit();
    randomNumber = parseInt(Math.floor(Math.random() * 100));
    randomDiv.innerHTML = randomNumber;
    randomDiv.style.filter = "blur(6px)";


}
submit.addEventListener("click", () => {
    wrongresult.innerHTML = "";
    result.innerHTML = "";
    const enteredNumber = Number(inputnumber.value);
    if (enteredNumber == "" || enteredNumber <= 0 || enteredNumber >= 100) {
        wrongresult.innerHTML = "Entered number is not allowed";
        inputnumber.value = "";
    }
    else if (randomNumber === enteredNumber) {
        result.innerHTML = "You Won";
        inputnumber.value = "";
        previousGuesses.innerHTML = "";
        disableSubmit();
        restartGameButton.addEventListener("click", () => {
            restartGame();
        })

    }
    else if (randomNumber != enteredNumber) {
        if (previousNumberArray.length <= 2) {
            result.innerHTML = randomNumber < enteredNumber ? `Number not Matched <br> Bigger number is entered` : `Number not Matched <br> Smaller number is entered`;
            previousNumberArray.push(enteredNumber);
            remainingAttempts.innerHTML = `You have ${3 - parseInt(previousNumberArray.length)} attempts to guess the right number`
            previousGuesses.innerHTML = `Previous Guesses: ${previousNumberArray}`;
            inputnumber.value = "";
        }
        else {

            wrongresult.innerHTML = `Max attempts rich, Correct Number is <strong>${randomNumber}</strong>`;
            disableSubmit();
            restartGameButton.addEventListener("click", () => {
                restartGame();
            })
        }

    }

})

