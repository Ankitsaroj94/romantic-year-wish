"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export function FinalReveal() {
  const [isFlipped, setIsFlipped] = useState(false)

  const letter = `My Dearest Love 💖,

Six years. 💑 We've spent six incredible years walking this path together. 👣 We have fought, we have struggled, and we have faced storms that would have broken others. ⛈️ But through it all, we are still here—hand in hand, stronger than ever. 💪❤️

You are the quiet peace in my chaos 🕊️ and the brightest light in my darkest days. ✨ I promise to cherish you in the quiet moments and the grand adventures 🌍, to listen, to understand, and to love you more fiercely with every sunrise. 🌅

Here's to the years behind us, and to the endless years still to come. 🥂✨

Forever Yours, 💍
Me`

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 pt-12 pb-20 overflow-y-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-serif mb-8 text-secondary text-center"
      >
        For my Cutiepie :)
      </motion.h2>

      <div
        className="relative w-full max-w-[420px] aspect-[3/4.5] cursor-pointer group [perspective:1200px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
          className="w-full h-full relative [transform-style:preserve-3d]"
        >
          {/* Front of Card */}
          <div className="absolute inset-0 backface-hidden [backface-visibility:hidden]">
            <div className="w-full h-full bg-[#fffcf5] p-6 rounded-2xl border-[10px] border-secondary shadow-2xl flex flex-col items-center justify-between text-[#4a3728]">
              <div className="w-full flex justify-between text-secondary opacity-40">
                <span className="text-xl">✨</span>
                <span className="text-xl">✨</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <motion.h3 className="text-4xl font-serif mb-4 leading-tight tracking-tight">
                  HAPPY
                  <br />
                  NEW YEAR
                </motion.h3>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-7xl font-serif text-primary drop-shadow-sm">2026</span>
                  <div className="text-4xl">🎆🥳💖</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl animate-pulse">🐻❄️⛄</div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold">
                  Tap to reveal my heart
                </p>
              </div>
            </div>
          </div>

          {/* Back of Card (Letter) */}
          <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="w-full h-full bg-white p-6 rounded-2xl border-[10px] border-secondary shadow-2xl flex flex-col">
              <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar scroll-smooth">
                <AnimatePresence>
                  {isFlipped && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="font-sans text-[#4a3728] text-lg leading-[1.6] whitespace-pre-wrap"
                    >
                      {letter}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="mt-4 pt-4 border-t border-secondary/10 flex items-center justify-center">
                <div className="text-3xl text-primary animate-bounce">💖</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="mt-8 text-white text-xs font-sans tracking-widest uppercase"
      >
        {isFlipped ? "Tap to close card" : "Tap the card to read"}
      </motion.p>
    </div>
  )
}
