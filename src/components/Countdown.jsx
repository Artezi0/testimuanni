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
    <div className="flex gap-2 text-center justify-center items-center md:items-baseline">
  {Object.entries(timeLeft).map(([label, value], index, array) => (
    <div key={label} className="flex items-baseline gap-2">
      <div className="flex flex-col items-center relative">
        <div className="flex justify-center w-14 sm:w-20 md:w-16 lg:w-20 xl:w-24 2xl:w-36 tabular-nums bg-[#7A1616] text-[#FBC33D] py-2 sm:py-4 md:py-6 px-2 sm:px-3 md:px-4 rounded-xl sm:rounded-2xl border-2 sm:border-4">
          <div className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold leading-none">
            {value}
          </div>
        </div>
        <div className="text-[#7A1616] text-[10px] sm:text-xs md:text-sm font-bold first-letter:uppercase">
          {label}
        </div>
      </div>
      {index < array.length - 1 && (
      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold text-[#FBC33D] text-stroke leading-none">
        :
      </span>
      )}
    </div>
  ))}
</div>

  )
}
