let input = document.getElementById("userInput");
let result = document.getElementById("gameResult");

let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)

function checkGuess() {
    let value = parseInt(input.value)
    let ceil = parseInt(randomNumber)
    if (value > ceil) {
        result.textContent = "Your Ans is Higher than Guessing value"
        result.style.backgroundColor = "#1e217c"
    } else if (value < ceil) {
        result.textContent = "Your Ans is Lesser than Guessing value"
        result.style.backgroundColor = "#1e217c"
    } else if (value === ceil) {
        result.textContent = "Congratualtions! Your Ans is Correct..."
        result.style.backgroundColor = "green"
    } else {
        result.textContent = "Provide your correct input of only Numbers..."
        result.style.backgroundColor = "#1e217c"
    }
}