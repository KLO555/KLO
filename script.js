function checkQuiz() {
  const answers = {
    q1: "3",
    q2: "3",
    q3: "3"
  };

  let score = 0;

  Object.keys(answers).forEach(q => {
    const radios = document.getElementsByName(q);
    for (let radio of radios) {
      if (radio.checked && radio.value === answers[q]) {
        score++;
      }
    }
  });

  const result = document.getElementById('quizResult');
  if (score === 3) {
    result.textContent = `🎉 ยอดเยี่ยม! คุณตอบถูกทั้ง ${score}/3 ข้อ`;
    result.style.color = "green";
  } else {
    result.textContent = `คุณตอบถูก ${score}/3 ข้อ ลองอีกครั้ง!`;
    result.style.color = "orange";
  }

  localStorage.setItem('lastScore', score);
  showLastScore();
}

function resetQuiz() {
  const allInputs = document.querySelectorAll('input[type="radio"]');
  allInputs.forEach(input => input.checked = false);
  document.getElementById('quizResult').textContent = '';
}

function showLastScore() {
  const last = localStorage.getItem('lastScore');
  if (last !== null) {
    document.getElementById('lastScore').textContent = `คะแนนล่าสุดของคุณ: ${last}/3`;
  }
}




window.onload = showLastScore;
