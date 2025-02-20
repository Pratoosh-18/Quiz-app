"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

interface IntegerQuestionProps {
  question: string
  onAnswer: (answer: number) => void
  isLastAttempt: boolean
}

export default function IntegerQuestion({ question, onAnswer, isLastAttempt }: IntegerQuestionProps) {
  const [answer, setAnswer] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const parsedAnswer = Number.parseInt(answer, 10)
    if (!isNaN(parsedAnswer)) {
      onAnswer(parsedAnswer)
      setAnswer("")
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h3 className="text-xl mb-4">{question}</h3>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer"
          className="flex-grow"
        />
        <Button type="submit">Submit</Button>
      </form>
      {isLastAttempt && <p className="mt-4 text-sm text-yellow-500">This is your last attempt. Answer carefully!</p>}
    </motion.div>
  )
}

