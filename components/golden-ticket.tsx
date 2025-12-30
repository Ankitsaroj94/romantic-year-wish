"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { Ticket } from "lucide-react"

export function GoldenTicket({ onComplete }: { onComplete: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <motion.div
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        className="relative w-full max-w-sm aspect-[1.6/1] bg-[#1a0b2e] border-4 border-accent rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.3)]"
      >
        {/* Ticket Notches */}
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-r-4 border-accent" />
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-l-4 border-accent" />

        <div className="h-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-accent/30 rounded-xl m-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="mb-4"
          >
            <Ticket className="w-12 h-12 text-accent" />
          </motion.div>

          <h2 className="text-3xl font-serif text-accent mb-2">GOLDEN TICKET</h2>
          <p className="text-accent/60 font-sans tracking-widest text-xs mb-4">VALID FOR EVERY DAY AHEAD</p>

          <h3 className="text-2xl font-serif shimmer text-center">&quot;Unlimited Love & Smiles&quot;</h3>

          <p className="mt-4 text-accent/40 text-[10px] uppercase">No expiration date</p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onComplete}
        className="mt-12 px-8 py-3 bg-accent text-background font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        REDEEM MY WISH
      </motion.button>
    </div>
  )
}
