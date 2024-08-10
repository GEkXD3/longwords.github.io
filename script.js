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
    let lastWord = '';

    while (result.length < length) {
        let randomWord;

        // Получаем новое случайное слово, которое не совпадает с предыдущим
        do {
            randomWord = wordSet[Math.floor(Math.random() * wordSet.length)];
        } while (randomWord === lastWord);

        if (result.length + randomWord.length <= length) {
            result += randomWord;
            lastWord = randomWord; // Обновляем последнее добавленное слово
        } else {
            // Если добавление слова превышает нужную длину, добавим часть слова
            result += randomWord.substring(0, length - result.length);
            break;
        }
    }

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
