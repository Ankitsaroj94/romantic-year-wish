"use client"


import { motion, useAnimation } from "framer-motion"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export function Gateway({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isHolding, setIsHolding] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isHolding) {
      interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            return 100
          }
          return p + 2
        })
      }, 30)
    } else {
      setProgress(0)
    }
    return () => clearInterval(interval)
  }, [isHolding])

  useEffect(() => {
    if (progress >= 100) {
      onComplete()
    }
  }, [progress, onComplete])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif text-center text-secondary"
      >
        A little surprise for you
      </motion.h1>

      <div className="relative group cursor-pointer">
        <svg className="w-48 h-48 -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-white/10"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="80"
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="502.6"
            strokeDashoffset={502.6 - (502.6 * progress) / 100}
            className="text-primary"
            transition={{ type: "spring", stiffness: 50 }}
          />
        </svg>

        <motion.div
          animate={{
            scale: isHolding ? 1.2 : [1, 1.1, 1],
            filter: isHolding ? "drop-shadow(0 0 20px #ff4d94)" : "none",
          }}
          transition={{
            scale: isHolding ? { duration: 0.2 } : { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
          }}
          className="absolute inset-0 flex items-center justify-center"
          onMouseDown={() => setIsHolding(true)}
          onMouseUp={() => setIsHolding(false)}
          onTouchStart={() => setIsHolding(true)}
          onTouchEnd={() => setIsHolding(false)}
        >
          <Heart className="w-20 h-20 fill-primary text-primary" />
        </motion.div>
      </div>

      <p className="text-white/60 font-sans uppercase tracking-[0.2em] text-sm animate-pulse">
        {isHolding ? "Unlocking..." : "Tap and hold"}
      </p>
    </div>
  )
}
