export class Quiz {
    constructor(questions) {
        this.questions = questions
        this.questionIndex = 0
        this.score = 0
    }

    getCurrentQuestion() {
        return this.questions[this.questionIndex]
    }

    validateAndContinue(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }

    isEnded() {
        return this.questions.length === this.questionIndex
    }
}