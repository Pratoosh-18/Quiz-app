import { Progress } from "@/components/ui/progress"

interface TimerProps {
  timeLeft: number
}

export default function Timer({ timeLeft }: TimerProps) {
  return (
    <div className="w-24">
      <Progress value={(timeLeft / 30) * 100} className="h-2" />
      <p className="text-sm text-center mt-1">{timeLeft}s</p>
    </div>
  )
}

