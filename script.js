// Набор слов для генерации длинного слова
const wordSet = ["metha", "ethan", "butan", "propyl", "aceta", "formi", "benze", "cyclo", "hexan", "pentan"];

// Функция для обновления значения ползунка
function updateLengthValue(value) {
    document.getElementById('lengthValue').innerText = value;
}

// Функция для генерации случайного слова
function generateWord() {
    const length = parseInt(document.getElementById('lengthRange').value);
    let result = '';

    while (result.length < length) {
        const randomWord = wordSet[Math.floor(Math.random() * wordSet.length)];
        result += randomWord;
    }

    result = result.substring(0, length);
    displayWordWithEffect(result);
}

// Функция для отображения слова с эффектом печати
function displayWordWithEffect(word) {
    const outputElement = document.getElementById('output');
    outputElement.innerText = ''; // Очистка предыдущего результата

    let index = 0;

    function typeEffect() {
        if (index < word.length) {
            outputElement.innerText += word[index];
            index++;
            setTimeout(typeEffect, 50); // Скорость печати (в мс)
        }
    }

    setTimeout(typeEffect, 5000); // Задержка перед началом эффекта (в мс)
}
