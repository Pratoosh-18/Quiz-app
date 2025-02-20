"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { Question } from "@/lib/quiz-data"

interface ScoreboardProps {
  score: number
  totalQuestions: number
  answers: (string | number)[]
  questions: Question[]
  onRestart: () => void
}

export default function Scoreboard({ score, totalQuestions, answers, questions, onRestart }: ScoreboardProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Quiz Results</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-2xl mb-6 text-center">
            Your score: <span className="font-bold">{score}</span> out of {totalQuestions}
          </p>
          <div className="mb-6 space-y-4">
            <h3 className="text-xl font-bold">Your Answers:</h3>
            {questions.map((question, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="font-semibold">{question.question}</p>
                  <p>
                    Your answer: <span className="font-bold">{answers[index]}</span>
                  </p>
                  <p>
                    Correct answer: <span className="font-bold">{question.correctAnswer}</span>
                  </p>
                  <p className={answers[index] === question.correctAnswer ? "text-green-500" : "text-red-500"}>
                    {answers[index] === question.correctAnswer ? "Correct" : "Incorrect"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button onClick={onRestart} className="w-full">
            Restart Quiz
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}

