"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface MultipleChoiceQuestionProps {
  question: string
  options: string[]
  onAnswer: (answer: string) => void
  isLastAttempt: boolean
}

export default function MultipleChoiceQuestion({
  question,
  options,
  onAnswer,
  isLastAttempt,
}: MultipleChoiceQuestionProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h3 className="text-xl mb-4">{question}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswer(option)}
            variant="outline"
            className="w-full text-left justify-start hover:bg-primary hover:text-primary-foreground"
          >
            {option}
          </Button>
        ))}
      </div>
      {isLastAttempt && <p className="mt-4 text-sm text-yellow-500">This is your last attempt. Choose carefully!</p>}
    </motion.div>
  )
}

