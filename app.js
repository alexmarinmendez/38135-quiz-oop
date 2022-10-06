import { questionArray } from './questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScore(quiz.score)
    } else {
        ui.showQuestion(quiz.getCurrentQuestion().text)
        ui.showChoices(quiz.getCurrentQuestion().choices, currentChoice => {
            quiz.validateAndContinue(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showProgress(quiz.questionIndex+1, quiz.questions.length)
    }
}

const main = () => {
    const quiz = new Quiz(questionArray)
    const ui = new UI()
    renderPage(quiz, ui)
}

main()