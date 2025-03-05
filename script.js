document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");
  const bgMusic = document.getElementById("bgMusic");

  let darkMode = false;
  let currentQuestionIndex = 0;
  let score = 0;
  let correctAnswers = 0;
  let attempts = 0;

  // Questions Array
  const questions = [
    {
      question: "What is the capital of Afghanistan?",
      answers: ["Kabul", "Tehran", "Islamabad"],
      correctAnswer: "Kabul",
      flagClass: "afghanistan"
    },
    {
      question: "What is the capital of Armenia?",
      answers: ["Yerevan", "Tbilisi", "Baku"],
      correctAnswer: "Yerevan",
      flagClass: "armenia"
    },
    {
      question: "What is the capital of Azerbaijan?",
      answers: ["Baku", "Yerevan", "Bishkek"],
      correctAnswer: "Baku",
      flagClass: "azerbaijan"
    },
    {
      question: "What is the capital of Bahrain?",
      answers: ["Manama", "Doha", "Riyadh"],
      correctAnswer: "Manama",
      flagClass: "bahrain"
    },
    {
      question: "What is the capital of Bangladesh?",
      answers: ["Dhaka", "Kathmandu", "Colombo"],
      correctAnswer: "Dhaka",
      flagClass: "bangladesh"
    },
    {
      question: "What is the capital of Bhutan?",
      answers: ["Thimphu", "Kathmandu", "Dhaka"],
      correctAnswer: "Thimphu",
      flagClass: "bhutan"
    },
    {
      question: "What is the capital of Brunei?",
      answers: ["Bandar Seri Begawan", "Jakarta", "Kuala Lumpur"],
      correctAnswer: "Bandar Seri Begawan",
      flagClass: "brunei"
    },
    {
      question: "What is the capital of Cambodia?",
      answers: ["Phnom Penh", "Seoul", "Hanoi"],
      correctAnswer: "Phnom Penh",
      flagClass: "cambodia"
    },
    {
      question: "What is the capital of China?",
      answers: ["Beijing", "Seoul", "Tokyo"],
      correctAnswer: "Beijing",
      flagClass: "china"
    },
    {
      question: "What is the capital of Cyprus?",
      answers: ["Nicosia", "Athens", "Beirut"],
      correctAnswer: "Nicosia",
      flagClass: "cyprus"
    },
    {
      question: "What is the capital of Georgia?",
      answers: ["Tbilisi", "Yerevan", "Baku"],
      correctAnswer: "Tbilisi",
      flagClass: "georgia"
    },
    {
      question: "What is the capital of India?",
      answers: ["New Delhi", "Islamabad", "Kathmandu"],
      correctAnswer: "New Delhi",
      flagClass: "india"
    },
    {
      question: "What is the capital of Indonesia?",
      answers: ["Jakarta", "Kuala Lumpur", "Bangkok"],
      correctAnswer: "Jakarta",
      flagClass: "indonesia"
    },
    {
      question: "What is the capital of Iran?",
      answers: ["Tehran", "Baghdad", "Damascus"],
      correctAnswer: "Tehran",
      flagClass: "iran"
    },
    {
      question: "What is the capital of Iraq?",
      answers: ["Baghdad", "Tehran", "Kuwait City"],
      correctAnswer: "Baghdad",
      flagClass: "iraq"
    },
    {
      question: "What is the capital of Israel?",
      answers: ["Jerusalem", "Tel Aviv", "Amman"],
      correctAnswer: "Jerusalem",
      flagClass: "israel"
    },
    {
      question: "What is the capital of Japan?",
      answers: ["Tokyo", "Seoul", "Beijing"],
      correctAnswer: "Tokyo",
      flagClass: "japan"
    },
    {
      question: "What is the capital of Jordan?",
      answers: ["Amman", "Jerusalem", "Beirut"],
      correctAnswer: "Amman",
      flagClass: "jordan"
    },
    {
      question: "What is the capital of Kazakhstan?",
      answers: ["Astana", "Almaty", "Bishkek"],
      correctAnswer: "Astana",
      flagClass: "kazakhstan"
    },
    {
      question: "What is the capital of Kuwait?",
      answers: ["Kuwait City", "Doha", "Manama"],
      correctAnswer: "Kuwait City",
      flagClass: "kuwait"
    },
    {
      question: "What is the capital of Kyrgyzstan?",
      answers: ["Bishkek", "Dushanbe", "Tashkent"],
      correctAnswer: "Bishkek",
      flagClass: "kyrgyzstan"
    },
    {
      question: "What is the capital of Laos?",
      answers: ["Vientiane", "Phnom Penh", "Hanoi"],
      correctAnswer: "Vientiane",
      flagClass: "laos"
    },
    {
      question: "What is the capital of Lebanon?",
      answers: ["Beirut", "Damascus", "Amman"],
      correctAnswer: "Beirut",
      flagClass: "lebanon"
    },
    {
      question: "What is the capital of Malaysia?",
      answers: ["Kuala Lumpur", "Jakarta", "Bangkok"],
      correctAnswer: "Kuala Lumpur",
      flagClass: "malaysia"
    },
    {
      question: "What is the capital of Maldives?",
      answers: ["Malé", "Colombo", "Dhaka"],
      correctAnswer: "Malé",
      flagClass: "maldives"
    },
    {
      question: "What is the capital of Mongolia?",
      answers: ["Ulaanbaatar", "Beijing", "Seoul"],
      correctAnswer: "Ulaanbaatar",
      flagClass: "mongolia"
    },
    {
      question: "What is the capital of Myanmar?",
      answers: ["Naypyidaw", "Bangkok", "Phnom Penh"],
      correctAnswer: "Naypyidaw",
      flagClass: "myanmar"
    },
    {
      question: "What is the capital of Nepal?",
      answers: ["Kathmandu", "Thimphu", "Dhaka"],
      correctAnswer: "Kathmandu",
      flagClass: "nepal"
    },
    {
      question: "What is the capital of North Korea?",
      answers: ["Pyongyang", "Seoul", "Tokyo"],
      correctAnswer: "Pyongyang",
      flagClass: "north-korea"
    },
    {
      question: "What is the capital of Oman?",
      answers: ["Muscat", "Riyadh", "Doha"],
      correctAnswer: "Muscat",
      flagClass: "oman"
    },
    {
      question: "What is the capital of Pakistan?",
      answers: ["Islamabad", "New Delhi", "Kabul"],
      correctAnswer: "Islamabad",
      flagClass: "pakistan"
    },
    {
      question: "What is the capital of Palestine?",
      answers: ["East Jerusalem", "Ramallah", "Gaza"],
      correctAnswer: "East Jerusalem",
      flagClass: "palestine"
    },
    {
      question: "What is the capital of Philippines?",
      answers: ["Manila", "Jakarta", "Bangkok"],
      correctAnswer: "Manila",
      flagClass: "philippines"
    },
    {
      question: "What is the capital of Qatar?",
      answers: ["Doha", "Riyadh", "Manama"],
      correctAnswer: "Doha",
      flagClass: "qatar"
    },
    {
      question: "What is the capital of Saudi Arabia?",
      answers: ["Riyadh", "Doha", "Manama"],
      correctAnswer: "Riyadh",
      flagClass: "saudi-arabia"
    },
    {
      question: "What is the capital of Singapore?",
      answers: ["Singapore", "Kuala Lumpur", "Jakarta"],
      correctAnswer: "Singapore",
      flagClass: "singapore"
    },
    {
      question: "What is the capital of South Korea?",
      answers: ["Seoul", "Tokyo", "Beijing"],
      correctAnswer: "Seoul",
      flagClass: "south-korea"
    },
    {
      question: "What is the capital of Sri Lanka?",
      answers: ["Colombo", "Malé", "Dhaka"],
      correctAnswer: "Colombo",
      flagClass: "sri-lanka"
    },
    {
      question: "What is the capital of Syria?",
      answers: ["Damascus", "Beirut", "Amman"],
      correctAnswer: "Damascus",
      flagClass: "syria"
    },
    {
      question: "What is the capital of Taiwan?",
      answers: ["Taipei", "Beijing", "Seoul"],
      correctAnswer: "Taipei",
      flagClass: "taiwan"
    },
    {
      question: "What is the capital of Tajikistan?",
      answers: ["Dushanbe", "Bishkek", "Tashkent"],
      correctAnswer: "Dushanbe",
      flagClass: "tajikistan"
    },
    {
      question: "What is the capital of Thailand?",
      answers: ["Bangkok", "Phnom Penh", "Hanoi"],
      correctAnswer: "Bangkok",
      flagClass: "thailand"
    },
    {
      question: "What is the capital of Timor-Leste?",
      answers: ["Dili", "Jakarta", "Manila"],
      correctAnswer: "Dili",
      flagClass: "timor-leste"
    },
    {
      question: "What is the capital of Turkmenistan?",
      answers: ["Ashgabat", "Tashkent", "Bishkek"],
      correctAnswer: "Ashgabat",
      flagClass: "turkmenistan"
    },
    {
      question: "What is the capital of United Arab Emirates?",
      answers: ["Abu Dhabi", "Dubai", "Doha"],
      correctAnswer: "Abu Dhabi",
      flagClass: "uae"
    },
    {
      question: "What is the capital of Uzbekistan?",
      answers: ["Tashkent", "Bishkek", "Dushanbe"],
      correctAnswer: "Tashkent",
      flagClass: "uzbekistan"
    },
    {
      question: "What is the capital of Vietnam?",
      answers: ["Hanoi", "Ho Chi Minh City", "Phnom Penh"],
      correctAnswer: "Hanoi",
      flagClass: "vietnam"
    },
    {
      question: "What is the capital of Yemen?",
      answers: ["Sana'a", "Aden", "Riyadh"],
      correctAnswer: "Sana'a",
      flagClass: "yemen"
    }
  ];

  // Shuffle Function (Fisher-Yates Algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle Questions and Answers
  const shuffledQuestions = shuffleArray([...questions]);
  shuffledQuestions.forEach((q) => shuffleArray(q.answers));

  // Render Game UI
  function renderGame() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const shuffledAnswers = [...currentQuestion.answers];

    questionContainer.innerHTML = `
      <div class="flag ${currentQuestion.flagClass}"></div>
      <h2>${currentQuestion.question}</h2>
      <div class="options">
        ${shuffledAnswers.map((answer, index) => `
          <button class="option-btn" onclick="checkAnswer(${index}, '${currentQuestion.correctAnswer}')">${answer}</button>
        `).join("")}
      </div>
      <div class="score-panel">Score: ${score} | Correct: ${correctAnswers} | Attempts: ${attempts}</div>
    `;
  }

  // Start Game
  window.startGame = function () {
    score = 0;
    correctAnswers = 0;
    attempts = 0;
    currentQuestionIndex = 0;
    renderGame();
  };

  // Check Answer
  window.checkAnswer = function (selectedIndex, correctAnswer) {
    const selectedAnswer = shuffledQuestions[currentQuestionIndex].answers[selectedIndex];
    attempts++;

    if (selectedAnswer === correctAnswer) {
      score += 100;
      correctAnswers++;
      correctSound.play();
    } else {
      score -= 50;
      wrongSound.play();
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < shuffledQuestions.length) {
        renderGame();
      } else {
        endGame();
      }
    }, 1000);
  };

  // End Game
  function endGame() {
    questionContainer.innerHTML = `
      <h1>Game Over!</h1>
      <p>Final Score: ${score}</p>
      <button class="start-button" onclick="startGame()">Play Again</button>
    `;
  }

  // Toggle Dark Mode
  window.toggleMode = function () {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
  };

  // Play Background Music
  bgMusic.volume = 0.3;
  bgMusic.play();

  // Initial Render
  renderGame();
});
