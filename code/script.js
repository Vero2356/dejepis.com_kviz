let questionIndex = 0;
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = shuffle([
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
    correct: 2
  }
  {
    type: "multiple",
    question: "Jaké byly důsledky bitvy u Stalingradu?",
    options: [
      "Ztráta celé německé 6. armády",
      "Zastavení německého postupu na východě",
      "Okamžitá kapitulace Německa",
      "Začátek sovětského protiútoku"
    ],
    correct: [0, 1, 3]
  },
  {
    type: "single",
    question: "Jaký význam měla bitva u El Alameinu?",
    options: [
      "Zabránila spojencům vylodit se v Itálii",
      "Znemožnila Německu ovládnout Suezský průplav",
      "Vedla k pádu Stalingradu",
      "Zničila japonské loďstvo"
    ],
    correct: 1
  },
  {
    type: "multiple",
    question: "Jaké byly důsledky bitvy u Midway pro Japonsko?",
    options: [
      "Ztráta čtyř letadlových lodí",
      "Konec japonské ofenzivy v Pacifiku",
      "Nucený ústup Japonska",
      "Začátek okupace USA"
    ],
    correct: [0, 1, 2]
  },
  {
    type: "single",
    question: "Který generál vedl německé jednotky v severní Africe?",
    options: [
      "Heinz Guderian",
      "Erwin Rommel",
      "Friedrich Paulus",
      "Georgy Žukov"
    ],
    correct: 1
  },
  {
    type: "single",
    question: "Jaký byl důvod otevření druhé fronty v Itálii?",
    options: [
      "Obrana Británie před invazí",
      "Zastavení sovětského postupu",
      "Oslabení německých sil na východě",
      "Zabránění japonské invazi do Austrálie"
    ],
    correct: 2
  },
  {
    type: "multiple",
    question: "Jakými způsoby se změnila situace na východní frontě po roce 1942?",
    options: [
      "Sověti přešli do ofenzivy",
      "Němci ztratili iniciativu",
      "Byl uzavřen mír mezi SSSR a Německem",
      "Zimní podmínky znovu zasáhly německé jednotky"
    ],
    correct: [0, 1, 3]
  },
  {
    type: "single",
    question: "Kdy došlo k porážce německých vojsk u Stalingradu?",
    options: [
      "V zimě 1941",
      "Na jaře 1942",
      "V únoru 1943",
      "V prosinci 1943"
    ],
    correct: 2
  },
  {
    type: "single",
    question: "Která událost vedla ke vstupu SSSR do protiútoku?",
    options: [
      "Bitva o Británii",
      "Vylodění v Normandii",
      "Zastavení Němců u Moskvy",
      "Operace Market Garden"
    ],
    correct: 2
  }

]);

let Testcontainer = document.getElementById("Test");

function createQuestion() {
  Testcontainer.innerHTML = "";

  let q = questions[questionIndex];

  // TEXT – jedno nebo více správných odpovědí
  let info = document.createElement("h5");
  info.style.fontWeight = "bold";
  info.style.color = "#444";
  info.textContent = q.type === "multiple"
    ? "Tato otázka má VÍCE správných odpovědí. (Můžeš zaškrtnout více možností)"
    : "Tato otázka má JEDNU správnou odpověď. (Vyber jen jednu možnost)";
  Testcontainer.appendChild(info);

  // Otázka
  let Otazka = document.createElement("h3");
  Otazka.textContent = q.question;
  Testcontainer.appendChild(Otazka);

  let form = document.createElement("form");
  form.id = "answer-form";

  q.options.forEach((option, index) => {
    let label = document.createElement("label");
    let input = document.createElement("input");

    input.type = q.type === "multiple" ? "checkbox" : "radio";
    input.name = "question";
    input.value = index;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });

  Testcontainer.appendChild(form);

  let button = document.createElement("button");
  button.textContent = "Odpovědět";
  button.onclick = checkAnswer;
  Testcontainer.appendChild(button);

  let resultEl = document.createElement("p");
  resultEl.id = "result";
  Testcontainer.appendChild(resultEl);
}


function checkAnswer(event) {
  event.preventDefault();

  let q = questions[questionIndex];
  let inputs = document.querySelectorAll('input[name="question"]:checked');
  let selected = Array.from(inputs).map(input => parseInt(input.value));

  let resultEl = document.getElementById("result");

  if (q.type === "single") {
    if (selected.length === 1 && selected[0] === q.correct) {
      resultEl.textContent = "Správně!";
    } else {
      resultEl.textContent = "Špatně!";
    }
  } else if (q.type === "multiple") {
    let isCorrect = selected.length === q.correct.length &&
      selected.every(value => q.correct.includes(value));

    resultEl.textContent = isCorrect ? "Správně!" : "Špatně!";
  }

  // Počkej 2 sekundy a načti další otázku
  setTimeout(() => {
    questionIndex++;
    if (questionIndex < questions.length) {
      createQuestion();
    } else {
      Testcontainer.innerHTML = "<h3>Test dokončen.</h3>";
    }
  }, 2000);
}

createQuestion();