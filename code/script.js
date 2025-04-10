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
  
let testContainer = document.getElementById("Test");
let btn = createElement("button", "Zkontrolovat", "btn", testContainer);

