"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Briefcase, Brain, CloudRain, ShieldAlert } from "lucide-react"

const CARDS = [
  { id: "distance", label: "Long Distance", color: "bg-blue-500/80", icon: ShieldAlert },
  { id: "stress", label: "Life's Stress", color: "bg-amber-500/80", icon: Brain },
  { id: "work", label: "Busy Work", color: "bg-orange-500/80", icon: Briefcase },
  { id: "bad-days", label: "Gloominess", color: "bg-rose-500/80", icon: CloudRain },
]

export function DeClutter({ onComplete }: { onComplete: () => void }) {
  const [remainingCards, setRemainingCards] = useState(CARDS)
  const [showGift, setShowGift] = useState(false)

  const handleDragEnd = (event: any, info: any, cardId: string) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      setRemainingCards((prev) => {
        const next = prev.filter((c) => c.id !== cardId)
        if (next.length === 0) {
          setTimeout(() => setShowGift(true), 500)
        }
        return next
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 relative overflow-hidden">
      {!showGift && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 px-4">
          <h2 className="text-3xl font-serif text-secondary mb-3 leading-tight">Something is waiting for you...</h2>
          <p className="text-white/70 italic text-sm">Gently move the distractions aside ❤️</p>
        </motion.div>
      )}

      <div className="relative w-full max-w-[280px] aspect-[3/4] flex items-center justify-center">
        <AnimatePresence>
          {remainingCards.map((card, index) => (
            <motion.div
              key={card.id}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={(e, info) => handleDragEnd(e, info, card.id)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: (index - remainingCards.length / 2) * 4,
              }}
              exit={(custom) => ({
                x: Math.random() > 0.5 ? 500 : -500,
                y: Math.random() > 0.5 ? 500 : -500,
                opacity: 0,
                rotate: 90,
                transition: { duration: 0.6, ease: "anticipate" },
              })}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              className={`absolute w-full h-full rounded-[2rem] shadow-2xl flex flex-col items-center justify-center cursor-grab active:cursor-grabbing backdrop-blur-md border border-white/20 ${card.color}`}
              style={{ zIndex: remainingCards.length - index }}
            >
              <div className="bg-white/20 p-5 rounded-full mb-6">
                <card.icon className="w-12 h-12 text-white" />
              </div>
              <span className="text-2xl font-serif text-white drop-shadow-md">{card.label}</span>
              <p className="mt-4 text-white/60 text-xs uppercase tracking-widest">Swipe to remove</p>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {showGift && (
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="absolute inset-0 bg-primary blur-3xl rounded-full"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onComplete}
                  className="relative w-36 h-36 bg-gradient-to-br from-primary to-rose-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,77,148,0.5)] border-4 border-white/30"
                >
                  <Gift className="w-16 h-16 text-white animate-bounce" />
                </motion.button>
              </div>
              <motion.p
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="text-2xl font-serif text-secondary text-center drop-shadow-lg"
              >
                Tap to open your gift ✨
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
