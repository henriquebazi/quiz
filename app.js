const form = document.querySelector('.quiz-form')
const paragraph = document.createElement('p')
const h2 = document.querySelector('h2')

const correctAnswers = ['B', 'A', 'A', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    const checkAnswer = userAnswer === correctAnswers[index]

    if (!checkAnswer) {
      return
    }

    score += 25
  })

  paragraph.textContent = `Sua pontuação foi de ${score} pontos!`
  paragraph.setAttribute('class', 'my-3 lead font-weight-bold text-center font-italic')
  h2.insertAdjacentElement('beforebegin', paragraph)
})
