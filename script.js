function checkQuiz() {
  const answers = {
    q1: "11",
    q2: "8",
    q3: "5",
    q4: "46",
    q5: "24",
    q6: "0"
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

  const total = Object.keys(answers).length;
  const result = document.getElementById('quizResult');
  if (score === total) {
    result.textContent = `🎉 ยอดเยี่ยม! คุณตอบถูกทั้งหมด ${score}/${total} ข้อ`;
    result.style.color = "green";
  } else {
    result.textContent = `คุณตอบถูก ${score}/${total} ข้อ ลองอีกครั้ง!`;
    result.style.color = "orange";
  }

  localStorage.setItem('lastScore', score);
  showLastScore(total);
}

function resetQuiz() {
  const allInputs = document.querySelectorAll('input[type="radio"]');
  allInputs.forEach(input => input.checked = false);
  document.getElementById('quizResult').textContent = '';
}

function showLastScore(total = 6) {
  const last = localStorage.getItem('lastScore');
  if (last !== null) {
    document.getElementById('lastScore').textContent = `คะแนนล่าสุดของคุณ: ${last}/${total}`;
  }
}

window.onload = () => showLastScore(6);
