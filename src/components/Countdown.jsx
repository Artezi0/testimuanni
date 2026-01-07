import { useEffect, useState } from "react"

export default function Countdown() {
  const targetDate = new Date("2026-01-21T00:00:00")

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()

    if (difference <= 0) return null

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-2 text-center items-center">
  {Object.entries(timeLeft).map(([label, value], index, array) => (
    <div key={label} className="flex items-center gap-2">
      
      {/* Number container */}
      <div className="flex flex-col items-center">
        <div className="w-26 tabular-nums bg-[#7A1616] text-[#FBC33D] pt-6 pb-6 pl-4 pr-4 rounded-2xl border-4">
          <div className="text-6xl font-extrabold">
            {value}
          </div>
        </div>
        <div className="text-[#7A1616] text-m font-bold first-letter:uppercase">
          {label}
        </div>
      </div>

      {/* Colon (not after last item) */}
      {index < array.length - 1 && (
        <span className="text-5xl font-extrabold text-[#FBC33D] pb-10 text-stroke">
          :
        </span>
      )}

    </div>
  ))}
</div>
  )
}
