const flashcardTitle = document.querySelector(".flashcard-title");
const flashcardAnswer = document.querySelector(".flashcard-answer");
const flashcardBg = document.querySelector(".flashcard-bg");
const flashcardId = document.querySelector(".cardNumber");

const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

// let lastCardNumber;
let flashcardNumber = 1;

// Questions array
let questionsArray = [
	`Jaka jest różnica między <span class="mark"> setTimeout() </span> a <span class="mark"> setInterval()</span> ?`,
	`Jaka jest różnica między <span class="mark">==</span> i <span class="mark"> ===</span>?`,
	`Jak wyczyścić tablicę obiektów w Javascript?`,
	`Czym się różni <span class="mark">let</span> i <span class="mark">var</span>?`,
	`Jakie są typty danych w JavaScript?`,
	`Jak utworzyć obiekt w JavaScript?`,
	``,
	``,
	``,
	``,
	``,
];

//Answer Array
let answerArray = [
	`Funkcje <span class="mark"> setTimeout()</span> i <span class="mark"> setInterval()</span> są używane w celu opóźnienia lub powtarzania wykonania kodu po upływie określonego czasu w języku JavaScript. </br></br>

    <span class="mark"> setTimeout()</span> pozwala na wykonanie kodu jednorazowo, z opóźnieniem określonym w milisekundach. Oznacza to, że kod zostanie wykonany po określonym czasie i zakończy swoje działanie.</br></br>
    
    <span class="mark"> setInterval()</span> pozwala na powtarzające się wykonanie kodu z określoną przerwą między każdym wykonaniem. Oznacza to, że kod będzie wykonywany wielokrotnie, dopóki nie zostanie przerwany.`,
	`Operator <span class="mark">==</span> porównuje wartości bez uwzględnienia typu danych. Oznacza to, że wykonuje konwersję typu danych w celu porównania wartości. Jeśli wartości są różnych typów, operator <span class="mark">==</span> dokona próby zamiany jednego z typów wartości na inny typ. Na przykład, gdy porównywane są liczby i stringi, operator <span class="mark">==</span> przekształca stringi na liczby przed porównaniem.</br></br>
    Operator <span class="mark">===</span> porównuje wartości, uwzględniając typ danych. Oznacza to, że porównanie będzie prawdziwe tylko wtedy, gdy porównywane wartości są tego samego typu i mają taką samą wartość.`,
	`1. Nadpisanie tablicy pustą tablicą</br></br>
    2. Ustawienie właściwości <span class="mark">length</span> tablicy na wartość 0</br></br>
    3. Wykorzystanie metody <span class="mark">splice()</span>, która może być użyta do usuwania elementów z tablicy (<span class="mark">splice()</span> modyfikuję tablicę i zwraca usunięte elementy)`,
	`<span class="mark">let</span> służy do deklarowania zmiennych w sposób blokowy, co oznacza, że zmienna jest widoczna tylko w obrębie bloku kodu, w którym została zdefiniowana. </br></br>
    <span class="mark">var</span> służy do deklarowania zmiennych w sposób funkcyjny, co oznacza, że zmienna jest widoczna w całej funkcji, w której została zdefiniowana. W przypadku, gdy zmienna została zdefiniowana poza funkcją, jest ona widoczna na poziomie globalnym (dla całego skryptu).</br></br> Tu jest jeszcze coś na fiszce "Dodatkowo" - wróć do tego`,
	`<p class="fsSmall">JavaScript posiada kilka podstawowych typów danych, które dzielą się na dwa rodzaje: wartości prymitywne (ang. primitive values) oraz wartości złożone (ang. composite values).</br>
    Wartości prymitywne to:</br>
       1. <span class="mark">Number </span> - reprezentują liczby całkowite i liczby zmiennoprzecinkowe.</br>
       2. <span class="mark">String </span> - reprezentują łańcuchy znaków, np. ciągi tekstowe.</br>
       3. <span class="mark">Boolean </span> - reprezentuje wartości prawda/fałsz.</br>
       4. <span class="mark">Undefined </span> - oznacza brak wartości, jest zwracane, gdy zmienna nie została zdefiniowana. </br>
       5. <span class="mark">Null </span> - oznacza brak wartości, jest zwracane, gdy wartość zmiennej jest celowo nieustawiona.</br>
       6. <span class="mark">Symbol </span> - reprezentuje unikalne identyfikatory, wprowadzone w ES6.</br>
    
    Wartości złożone to:</br>
       1. <span class="mark">Object </span> - reprezentują złożone struktury danych, np. tablice, funkcje, obiekty, klasy.</br>
       2. <span class="mark">Function </span> - reprezentują bloki kodu, które wykonują jakieś operacje.</br></p>`,
	`<img src="img/answer6.png" class="img">`,
	``,
	``,
	``,
	``,
	``,
];

// console.log(flashcardNumber);

flashcardTitle.innerHTML = questionsArray[0];
flashcardAnswer.innerHTML = answerArray[0];

flashcardBg.addEventListener("click", function () {
	flashcardBg.classList.add("shadow");
	flashcardAnswer.classList.remove("shadow");
});

flashcardAnswer.addEventListener("click", function () {
	flashcardBg.classList.remove("shadow");
	flashcardAnswer.classList.add("shadow");
});

previousBtn.addEventListener("click", function () {
	console.log("kliknąłeś strzałkę w lewo");

	if (flashcardNumber > 1) {
		flashcardNumber--;
		flashcardTitle.innerHTML = questionsArray[flashcardNumber - 1];
		flashcardAnswer.innerHTML = answerArray[flashcardNumber - 1];
		flashcardBg.classList.remove("shadow");
		flashcardAnswer.classList.add("shadow");
		console.log(flashcardNumber);
		flashcardId.innerHTML = flashcardNumber;
	} else {
	}
});

nextBtn.addEventListener("click", function () {
	console.log("kliknąłeś strzałkę w prawo");

	if (flashcardNumber < answerArray.length) {
		flashcardNumber++;
		flashcardTitle.innerHTML = questionsArray[flashcardNumber - 1];
		flashcardAnswer.innerHTML = answerArray[flashcardNumber - 1];
		flashcardBg.classList.remove("shadow");
		flashcardAnswer.classList.add("shadow");
		console.log(flashcardNumber);
		flashcardId.innerHTML = flashcardNumber;
	} else {
	}
});





