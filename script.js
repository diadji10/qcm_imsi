const questions = [
  {
    question:
      'Remplir les différentes cages avec le sigle approprié  <br/>  <img src ="schema.png" alt"schema"/>',
    answers: [
      {
        text: "A: SIG ; B: SAD; C: STT; D: SID ",
        correct: "false",
      },
      { text: "A: SID ; B: SIG; C: SAD; D: STT", correct: "false" },
      {
        text: "A: SAD ; B: STT; C: SID; D: SIG",
        correct: "false",
      },
      {
        text: "A: SIG; B: SID; C: SAD; D: STT",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Quels sont les facteurs qui permettent de mesurer l'influence croissante, actuelle et future des SI sur les entreprises",
    answers: [
      {
        text: "Le développement des TIC",
        correct: "true",
      },
      {
        text: "La transformation digitale",
        correct: "false",
      },
      { text: "Les investissements en SI", correct: "true" },
      { text: "Le développement d'une économie mondialisée", correct: "true" },
    ],
  },
  {
    question:
      "Dans les activités financière et comptable, quel niveau du SI permet de suivre les mouvements de fond dans l'Entreprise",
    answers: [
      {
        text: "La stratégie",
        correct: "false",
      },
      { text: "La gestion", correct: "false" },
      { text: "Les opérations", correct: "true" },
    ],
  },
  {
    question: "un SI ?",
    answers: [
      {
        text: "Est un emsemble d'ordinateurs interconnectés afin de pouvoir échanger des informations",
        correct: "false",
      },
      {
        text: "Est un système de traitement automatique des données",
        correct: "false",
      },
      {
        text: "Est un dispositif qui permet de stocker et traiter les données au sein d'une Entreprise",
        correct: "false",
      },
      {
        text: "Est un ensemble de sous-systèmes inter-reliés qui recueillent ( ou récupèrent de l'information, la traitent , la stockent, la diffusent afin d'aider à la prise de décision,à la coordination et au controle au sein d'une organisation",
        correct: "false",
      },
      {
        text: "Est un ensemble de composants inter-reliés qui recueillent ( ou récupèrent de l'information, la traitent , la stockent, la diffusent afin d'aider à la prise de décision,à la coordination et au controle au sein d'une organisation",
        correct: "true",
      },
    ],
  },
  {
    question: "Une information est :",
    answers: [
      {
        text: "Une valeur traitée et dont le résultat fait allusion à un événement capable d'améliorer la productivité de l'entreprise",
        correct: "false",
      },
      {
        text: "Une valeur à l'état brut représentant un événement qui a lieu dans ou en dehors de l'organisation",
        correct: "false",
      },
      {
        text: "Une valeur brute présentée sous forme utile et utilisable par un utilisateur",
        correct: "false",
      },
      {
        text: "Une donnée qui est présentée sous forme utile et utilisable par une personne",
        correct: "true",
      },
    ],
  },
  {
    question: "Les actifs complémentaires sont : ",
    answers: [
      {
        text: "Des éléments qui permettent de compléter la traitement d'une transaction commerciale au sein d'une organisation",
        correct: "false",
      },
      {
        text: "Les actifs nécessaires pour tirer de la valeur d'un investissement primaire",
        correct: "true",
      },
      {
        text: "Les moyens additionnels capables de motiver le personnel au sein de l'organisation afin de booster la production",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Quatres raisons qui font que les TI jouent un role essentiel dans le succès d'une entreprise :",
    answers: [
      {
        text: "L'adéquation avec la nouvelle réglementation",
        correct: "false",
      },
      {
        text: "La gestion du capital",
        correct: "true",
      },
      { text: "Les possibilités et avantages stratégiques", correct: "true" },
      { text: "La productivité", correct: "true" },
      {
        text: "L'alignement du SI sur la production de valeur",
        correct: "false",
      },
      { text: "Les fondements des affaires", correct: "true" },
      { text: "La modernisation", correct: "false" },
      { text: "l'adaptation  à la concurrence", correct: "false" },
    ],
  },
  {
    question:
      "Quels sont les facteurs qui permettent de mesurer l'influence croissante de la TI sur les Entreprises",
    answers: [
      {
        text: "Les innovations en matière de processus d'affaires, de gestion et d'organisation",
        correct: "false",
      },
      {
        text: "La naissance d'une économie mondiale branchée",
        correct: "false",
      },
      {
        text: "Le développement des économies axées sur le savoir et l'information",
        correct: "true",
      },
      {
        text: "Le développement d'une économie mondiale branchée",
        correct: "true",
      },
      { text: "L'émergence de l'ENtreprise numérique", correct: "true" },
      { text: "La banalisation de la technologie", correct: "false" },
      {
        text: "Le développement d'Internet et la convergence technologique",
        correct: "true",
      },
      { text: "La transformation de l'Entreprise", correct: "true" },
    ],
  },
  {
    question: "La convergence d'Internet et des technologies amène : ",
    answers: [
      {
        text: "Une convergence des télécommunications des ordinateurs et des logiciels",
        correct: "true",
      },
      { text: "La transformation de l'Entreprise", correct: "false" },
      {
        text: "Le développement d'une économie mondiale branchée",
        correct: "false",
      },
    ],
  },
  {
    question: "Citez quleques facteurs de la transformation de l'entreprise",
    answers: [
      {
        text: "Modernisation du SI",
        correct: "false",
      },
      {
        text: "Indépendance vis-à-vis de la localisation",
        correct: "true",
      },
      { text: "Cout élevé des investissements", correct: "false" },
      { text: "Travail de collaboration et d'équipe", correct: "true" },
      {
        text: "Aplanissement de la hiérarchie",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Les SI contiennent des informations sur des ...(choisir 3 réponses)",
    answers: [
      {
        text: "Utilisateurs",
        correct: "true",
      },
      {
        text: "Technologies",
        correct: "false",
      },
      { text: "Objets", correct: "false" },
      { text: "Lieux", correct: "true" },
      {
        text: "Personnes",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Caractéristiques du développement de l'économie de l'information",
    answers: [
      {
        text: "Maitrise de l'environnement des affaires",
        correct: "false",
      },
      {
        text: "Plus grande connaissance des employés",
        correct: "false",
      },
      { text: "Plus courte durée de vie du produit", correct: "true" },
      {
        text: "Connaissance considérée comme un actif de taille sur les plans de la production  et de la stratégie",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Citez quelques éléments dans l'émergence de l'entreprise numérique",
    answers: [
      {
        text: "Principaux processus d'affaires reposent sur des réseaux numériques",
        correct: "true",
      },
      {
        text: "Principaux processus d'affaires reposent sur des réseaux sociaux professionnels",
        correct: "false",
      },
      {
        text: "Circulation aisée de l'information entre l'Entreprise et ses partenaires stratégiques",
        correct: "true",
      },
      { text: "Gestion des actifs clés par ordinateur", correct: "false" },
    ],
  },
  {
    question: "Déterminer les composants de la dimension managériale des SI",
    answers: [
      {
        text: "Penser la politique de développement",
        correct: "false",
      },
      {
        text: "Planifier",
        correct: "true",
      },
      { text: "Prendre des décisions", correct: "true" },
      { text: "Investir dans de nouveaux produits", correct: "false" },
      { text: "Gestion des processus d'affaires", correct: "false" },
      { text: "Exercer un leadership responsable", correct: "true" },
    ],
  },
  {
    question: "Le défi stratégique permet de définir",
    answers: [
      {
        text: "Quels sont les avantages dont les entreprise ont besoin pour utiliser efficacement les SI",
        correct: "false",
      },
      {
        text: "Quels sont les actifs complémentaires dont les Entreprises ont besoin pour utiliser efficacement les SI",
        correct: "true",
      },
      {
        text: "Comment les entreprises peuvent-elles comprendre et combiner les exigences concurrentielles et les potentialités des SI",
        correct: "false",
      },
    ],
  },
  {
    question:
      "La stratégie d'affaires d'une Entreprise et les décisions qui en découlent déterminent :",
    answers: [
      {
        text: "Quels sont les objectifs à long terme",
        correct: "true",
      },
      {
        text: "Les produits et services que vend l'Entreprise",
        correct: "false",
      },
      {
        text: "Les produits et services que produit l'Entreprise",
        correct: "true",
      },
      {
        text: "Quelle est la stratégie de déploiement de son SI",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Dsn un SI trois activités participent à la production de l'information : Lesquelles ?",
    answers: [
      {
        text: "La configuration",
        correct: "false",
      },
      {
        text: "L'entrée",
        correct: "true",
      },
      { text: "L'organisation", correct: "false" },
      { text: "Le traitement", correct: "true" },
      { text: "La sortie", correct: "true" },
    ],
  },
  {
    question: "Les éléments clés d'une organisation sont :",
    answers: [
      {
        text: "Le personnel",
        correct: "true",
      },
      {
        text: "La politique",
        correct: "true",
      },
      { text: "Les processus opérationnels", correct: "true" },
      { text: "La structure", correct: "true" },
      { text: "Les services", correct: "false" },
      { text: "La culture", correct: "false" },
      { text: "Les processus organisationnels", correct: "true" },
    ],
  },
  {
    question:
      "Trois principaux niveaux de SI supportent les différents niveaux de l'organisation",
    answers: [
      {
        text: "Le système d'aide à la décisiom",
        correct: "false",
      },
      {
        text: "Le système d'aide à l'organistaion",
        correct: "false",
      },
      { text: "Les systèmes d'aide au management", correct: "true" },
      { text: "Le système d'aide à la stratégie", correct: "true" },
      { text: "Le système d'aide aux opérations", correct: "true" },
    ],
  },
  {
    question: "A quoi correspondent les sigles suivants: STT,SID,SAD,SIG",
    answers: [
      {
        text: "Système d'Information Géographique",
        correct: "false",
      },
      {
        text: "Système de Traitement des Transactions",
        correct: "true",
      },
      { text: "Système d'Information Décisionnels", correct: "false" },
      { text: "Système d'Information pour les Dirigeants", correct: "true" },
      { text: "Système de Traitement des Taches", correct: "false" },
      { text: "Système d'Information de Gestion ", correct: "true" },
      { text: "Système d'Aide à la Décision", correct: "true" },
    ],
  },
  {
    question:
      "Dans le système de vente et de Marketing, à quel niveau les SI suivent t-ils les tendances qui influent sur les nouveaux produits",
    answers: [
      {
        text: "Les opérations",
        correct: "false",
      },
      {
        text: "La gestion",
        correct: "false",
      },
      {
        text: "La stratégie",
        correct: "true",
      },
    ],
  },
  {
    question:
      "Dans le système de fabrication et de logistique,à quel niveau les SI permettent-ils d'analyser les couts et les ressources concernant la fabrication ?",
    answers: [
      {
        text: "La stratégie",
        correct: "false",
      },
      {
        text: "La gestion",
        correct: "true",
      },
      {
        text: "Les opérations",
        correct: "false",
      },
    ],
  },
  {
    question: "L'infrastructure de la TI c'est:",
    answers: [
      {
        text: "Ensemble des appareils et de logiciels indispensables au bon fonctionnement de l'entreprise tout entière",
        correct: "true",
      },
      {
        text: "L'ensemble des composants hardware favorisant un bon fonctionnement du SI",
        correct: "false",
      },
      {
        text: "L'ensemble des plateformes capables de participer au bon fonctionnement du SI",
        correct: "false",
      },
      {
        text: "Toutes les ressources déployées dans le cadre de la mise en place d'un SI",
        correct: "false",
      },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restart = document.querySelector(".return");
let currentQuestiomIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestiomIndex = 0;
  score = 0;
  nextButton.innerHTML = "Suivant";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestiomIndex];
  let questionNo = currentQuestiomIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  if (((score * 20) / currentQuestiomIndex).toFixed(2) < 10) {
    questionElement.innerHTML = `Votre note est de <span class="note mauvais">${(
      (score * 20) /
      currentQuestiomIndex
    ).toFixed(2)}/20</span>`;
  } else {
    questionElement.innerHTML = `Votre note est de <span class="note bon">${(
      (score * 20) /
      currentQuestiomIndex
    ).toFixed(2)}/20</span>`;
  }
  nextButton.innerHTML = "Recommencer";
  nextButton.style.display = "block";
  restart.style.display = "none";
}

function handleNextButton() {
  currentQuestiomIndex++;
  if (currentQuestiomIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestiomIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
