button = document.querySelector("#btn");
textBall = document.querySelector("#ball-text");

const answer = ["Спросите снова", "Точно нет", "Не сейчас", "Спросите позже", "Точно да", "Не сейчас",
"Да", "Духи говорят да", "Мало шансов", "Очень вероятно", "Непонятно", "Неясно", "Духи говорят нет",
"Нет", "Не могу сказать", "Шансы хорошие", "Без сомнений", "Возможно", "Не могу сказать"]

button.addEventListener("click", function() {
    let randomAnswer = answer[Math.floor(Math.random() * answer.length)];
    textBall.style.display = "block";
    textBall.textContent = randomAnswer;
})

