export type QuestionType = "multiple" | "integer"

export interface BaseQuestion {
  type: QuestionType
  question: string
  correctAnswer: string | number
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple"
  options: string[]
  correctAnswer: string
}

export interface IntegerQuestion extends BaseQuestion {
  type: "integer"
  correctAnswer: number
}

export type Question = MultipleChoiceQuestion | IntegerQuestion

export const questions: Question[] = [
  {
    type: "multiple",
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    type: "multiple",
    question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue",
  },
  {
    type: "multiple",
    question: "Which of the following is primarily used for structuring web pages?",
    options: ["Python", "Java", "HTML", "C++"],
    correctAnswer: "HTML",
  },
  {
    type: "multiple",
    question: "Which chemical symbol stands for Gold?",
    options: ["Au", "Gd", "Ag", "Pt"],
    correctAnswer: "Au",
  },
  {
    type: "multiple",
    question: "Which of these processes is not typically involved in refining petroleum?",
    options: ["Fractional distillation", "Cracking", "Polymerization", "Filtration"],
    correctAnswer: "Filtration",
  },
  {
    type: "integer",
    question: "What is the value of 12 + 28?",
    correctAnswer: 40,
  },
  {
    type: "integer",
    question: "How many states are there in the United States?",
    correctAnswer: 50,
  },
  {
    type: "integer",
    question: "In which year was the Declaration of Independence signed?",
    correctAnswer: 1776,
  },
  {
    type: "integer",
    question: "What is the value of pi rounded to the nearest integer?",
    correctAnswer: 3,
  },
  {
    type: "integer",
    question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
    correctAnswer: 120,
  },
]

