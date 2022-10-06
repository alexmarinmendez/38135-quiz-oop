export class UI {
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
    }

    showChoices(choices, cb) {
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''
        for (let i=0; i<choices.length; i++) {
            const button = document.createElement("button")
            button.innerHTML = choices[i]
            button.className = 'button'
            button.addEventListener('click', () => cb(choices[i]))
            choicesContainer.append(button)
        }
    }

    showScore(score) {
        const quizEndHTML = `
            <h1>Result</h1>
            <h2>Your final score is: ${score}</h2>
        `

        const elQuiz = document.getElementById('quiz')
        elQuiz.innerHTML = quizEndHTML
    }

    showProgress(currentQ, totalQ) {
        const element = document.getElementById('progress')
        element.innerHTML = `Questions ${currentQ} of ${totalQ}` 
    }
}