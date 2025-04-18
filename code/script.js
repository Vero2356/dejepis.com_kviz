//sledovani u ktere otazky jsem
let questionIndex = 0;
//otazky
const questions = [
    {
      type: "multiple",
      question: "Co bylo důsledkem vstupu USA do války?",
      options: [
        "Zvýšení síly Spojenců",
        "Okamžité vítězství",
        "Válka v Tichomoří",
        "Porážka Japonska v Pearl Harbor"
      ],
      correct: [0, 2]
    },
    {
      type: "single",
      question: "Jaká byla počáteční situace Rudé armády po německém útoku?",
      options: [
        "Byla připravena a úspěšná",
        "Byla přetížená, ale odolala",
        "Nebyla připravená a ustupovala",
        "Přepadla Němce na jejich území"
      ],
      correct: 2
    },
    {
      type: "multiple",
      question: "Které země byly součástí Osy?",
      options: [
        "Německo",
        "Itálie",
        "Japonsko",
        "SSSR"
      ],
      correct: [0, 1, 2]
    },
    {
      type: "single",
      question: "Kdy začala operace Barbarossa?",
      options: [
        "1. září 1939",
        "7. prosince 1941",
        "22. června 1941",
        "6. června 1944"
      ],
      correct: 2
    },
    {
      type: "single",
      question: "Které město bylo cílem severní části německé armády při operaci Barbarossa?",
      options: [
        "Moskva",
        "Kyjev",
        "Leningrad",
        "Stalingrad"
      ],
      correct: 2
    },
    {
      type: "single",
      question: "Jaký byl Hitlerův hlavní cíl východního tažení?",
      options: [
        "Získání přístupu k moři",
        "Ochrana před USA",
        "Zajištění životního prostoru na východě",
        "Zničení britské flotily"
      ],
      correct: 2
    },
    {
      type: "multiple",
      question: "Které bitvy byly zásadní pro druhou fázi války?",
      options: [
        "Bitva o Stalingrad",
        "Bitva o Británii",
        "Bitva u Midway",
        "Vylodění v Normandii"
      ],
      correct: [0, 2]
    },
    {
      type: "single",
      question: "Kdy proběhl japonský útok na Pearl Harbor?",
      options: [
        "6. června 1944",
        "7. prosince 1941",
        "22. června 1941",
        "1. září 1939"
      ],
      correct: 1
    },
    {
      type: "multiple",
      question: "Které faktory přispěly k porážce Němců u Stalingradu?",
      options: [
        "Tvrdá zima",
        "Obklíčení německých sil",
        "Pomoc britských jednotek",
        "Nedostatek zásob"
      ],
      correct: [0, 1, 3]
    },
    {
      type: "single",
      question: "Jaký význam měla bitva u Midway?",
      options: [
        "Zastavila německý postup do SSSR",
        "Zvrátila válku v Africe",
        "Zlomila japonskou nadvládu v Tichomoří",
        "Vedla ke kapitulaci Itálie"
      ],
      correct: 3

    }
  ];
  //nalezení div kde budou otazky
let  Testcontainer = document.getElementById("Test");

//funkce pro vytvoření otázek
function createQuestion() {
Testcontainer.innerHTML = ""; //vymazání předchozí otázky

let q = questions[questionIndex]; //nalezení aktuální otázky

//vytvoření nadpisu pro otazku

let Otazka = document.createElement("h6");

Otazka.textContent = q.question; //text otazky. 
// Otazka.textContent je pro vytvoření nadpisu
//q.question --> q vezme otázku z pole otázek a .question vezme text otázky

Testcontainer.appendChild(Otazka); //přidání nadpisu do divu

let form = document.createElement("form"); //vytvoření formuláře pro odpovědi
form.id = "answer-form"; //udělání id pro formulář  

q.options.forEach((option, index) => { //pro každou odpověď v otázce
  let label  = document.createElement("label"); //vytvoření labelu pro odpověď
let input = document.createElement("input"); //vytvoření inputu pro odpověď

input.type = q.type === "multiple" ? "checkbox" : "radio"; 
//pokud je otázka typu multiple, input bude checkbox, jinak radio
input.name = "question";
input.value = index;

label.appendChild(input); //přidání inputu do labelu
label.appendChild(document.createTextNode(option)); //přidání textu odpovědi do labelu
form.appendChild(label); //přidání labelu do formuláře
form.appendChild(document.createElement("br")); //přidání nového řádku
});
}

quizContainer.appendChild(form); //přidání formuláře do divu

//tlačitko pro odeslání odpovědi

let button = document.createElement("button"); //vytvoření tlačítka
button.textContent = "Odpovědět"; //text tlačítka
button.onclick = checkAnswer; //při kliknutí na tlačítko se spustí funkce checkAnswer
quizContainer.appendChild(button);

let resultEL = document.createElement("p");
ressultEl.id = "result"; //vytvoření id pro výsledek
quizContainer.appendChild(resultEL);

function checkAnswer(event) { //funkce pro kontrolu odpovědi
  event.preventDefault();
  let q = questions[currentIndex]; //nalezení aktuální otázky
let inputs = document.querySelectorAll('input[name="answer"]:checked'); //nalezení všech inputů s name question
let selected = Array.from(inputs).map(input => input.value);
}