document.addEventListener("DOMContentLoaded", function() {
    const lengthSlider = document.getElementById("lengthSlider");
    const lengthValue = document.getElementById("lengthValue");
    const generateButton = document.getElementById("generateButton");
    const output = document.getElementById("output");

    // Предопределенный набор слов длиной 5 символов
    const wordSet = ["семьс", "шесть", "пять", "групп", "резул", "форма", "квант", "друго"];

    lengthSlider.addEventListener("input", function() {
        lengthValue.textContent = lengthSlider.value;
    });

    generateButton.addEventListener("click", function() {
        const targetLength = parseInt(lengthSlider.value);
        const generatedWord = generateRandomWord(targetLength, wordSet);
        displayWord(generatedWord);
    });

    function generateRandomWord(length, words) {
        let result = "";
        while (result.length < length) {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            if (result.length + randomWord.length <= length) {
                result += randomWord;
            }
        }
        return result;
    }

    function displayWord(word) {
        output.textContent = "";
        let index = 0;
        
        const interval = setInterval(() => {
            output.textContent += word[index];
            index++;
            if (index === word.length) {
                clearInterval(interval);
            }
        }, 1000 / word.length); // Длительность эффекта печатания
    }
});
