"use client"

import { useQuiz } from "@/hooks/useQuiz"
import { questions } from "@/lib/quiz-data"
import MultipleChoiceQuestion from "./MultipleChoiceQuestion"
import IntegerQuestion from "./IntegerQuestion"
import Timer from "./Timer"
import Scoreboard from "./Scoreboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const MAX_ATTEMPTS = 3 // Define MAX_ATTEMPTS

export default function Quiz() {
  const {
    currentQuestion,
    score,
    showScore,
    timeLeft,
    answers,
    attempts,
    handleAnswer,
    restartQuiz,
    totalQuestions,
    currentQuestionData,
    isLastAttempt,
  } = useQuiz(questions)

  if (showScore) {
    return (
      <Scoreboard
        score={score}
        totalQuestions={totalQuestions}
        answers={answers}
        questions={questions}
        onRestart={restartQuiz}
      />
    )
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>
            Question {currentQuestion + 1}/{totalQuestions}
          </span>
          <Timer timeLeft={timeLeft} />
        </CardTitle>
        <Progress value={(currentQuestion / totalQuestions) * 100} className="mt-2" />
      </CardHeader>
      <CardContent>
        {currentQuestionData.type === "multiple" ? (
          <MultipleChoiceQuestion
            question={currentQuestionData.question}
            options={currentQuestionData.options}
            onAnswer={handleAnswer}
            isLastAttempt={isLastAttempt}
          />
        ) : (
          <IntegerQuestion
            question={currentQuestionData.question}
            onAnswer={handleAnswer}
            isLastAttempt={isLastAttempt}
          />
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          Attempt {attempts[currentQuestion] + 1} of {MAX_ATTEMPTS}
        </p>
      </CardContent>
    </Card>
  )
}

