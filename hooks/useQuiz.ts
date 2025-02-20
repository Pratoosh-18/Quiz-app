"use client"

import { useState, useEffect, useCallback } from "react"
import type { Question } from "@/lib/quiz-data"

interface QuizState {
  currentQuestion: number
  score: number
  showScore: boolean
  timeLeft: number
  answers: (string | number)[]
  attempts: number[]
}

const INITIAL_TIME = 30
const MAX_ATTEMPTS = 2

export function useQuiz(questions: Question[]) {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    showScore: false,
    timeLeft: INITIAL_TIME,
    answers: [],
    attempts: Array(questions.length).fill(0),
  })

  const handleAnswer = useCallback(
    (answer: string | number) => {
      setState((prevState) => {
        const currentQuestion = questions[prevState.currentQuestion]
        const isCorrect = answer === currentQuestion.correctAnswer
        const newAttempts = [...prevState.attempts]
        newAttempts[prevState.currentQuestion]++

        // Check if the answer is correct or if max attempts have been reached
        const shouldMoveToNextQuestion = isCorrect || newAttempts[prevState.currentQuestion] >= MAX_ATTEMPTS

        return {
          ...prevState,
          score: isCorrect ? prevState.score + 1 : prevState.score,
          answers: [...prevState.answers, answer],
          attempts: newAttempts,
          currentQuestion: shouldMoveToNextQuestion ? prevState.currentQuestion + 1 : prevState.currentQuestion,
          timeLeft: shouldMoveToNextQuestion ? INITIAL_TIME : prevState.timeLeft,
          showScore: shouldMoveToNextQuestion && prevState.currentQuestion === questions.length - 1,
        }
      })
    },
    [questions],
  )

  const restartQuiz = useCallback(() => {
    setState({
      currentQuestion: 0,
      score: 0,
      showScore: false,
      timeLeft: INITIAL_TIME,
      answers: [],
      attempts: Array(questions.length).fill(0),
    })
  }, [questions.length])

  useEffect(() => {
    if (state.timeLeft > 0 && !state.showScore) {
      const timer = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          timeLeft: prevState.timeLeft - 1,
        }))
      }, 1000)

      return () => clearTimeout(timer)
    } else if (state.timeLeft === 0) {
      handleAnswer("") // Submit an empty answer when time runs out
    }
  }, [state.timeLeft, state.showScore, handleAnswer])

  return {
    ...state,
    handleAnswer,
    restartQuiz,
    totalQuestions: questions.length,
    currentQuestionData: questions[state.currentQuestion],
    isLastAttempt: state.attempts[state.currentQuestion] === MAX_ATTEMPTS - 1,
  }
}

