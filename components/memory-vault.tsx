"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

// Using provided images for polaroids
const MEMORIES = [
  { id: 1, src: "/images/7.jpg", caption: "Sweet moments" },
  { id: 2, src: "/images/6.jpg", caption: "Always laughing" },
  // Adding placeholders for more
  { id: 3, src: "/couple-walking-in-park.jpg", caption: "Our first walk" },
  { id: 4, src: "/couple-eating-ice-cream.jpg", caption: "Ice cream date" },
  { id: 5, src: "/serene-sunset-landscape.png", caption: "Watching sunsets" },
]

export function MemoryVault({ onComplete }: { onComplete: () => void }) {
  const [stack, setStack] = useState(MEMORIES)
  const [tapCount, setTapCount] = useState(0)

  const handleTap = () => {
    if (tapCount >= MEMORIES.length * 2) {
      onComplete()
      return
    }

    setStack((prev) => {
      const first = prev[0]
      const rest = prev.slice(1)
      return [...rest, first]
    })
    setTapCount((c) => c + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-3xl font-serif mb-8 text-center">Some moments from this year</h2>

      <div className="relative w-72 h-96 mb-12" onClick={handleTap}>
        <AnimatePresence mode="popLayout">
          {stack.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ scale: 0.9, opacity: 0, rotate: index * 2 }}
              animate={{
                scale: 1 - index * 0.05,
                y: -index * 10,
                opacity: 1 - index * 0.2,
                rotate: (index % 2 === 0 ? 1 : -1) * (index * 2),
                zIndex: stack.length - index,
              }}
              exit={{
                x: 300,
                opacity: 0,
                rotate: 15,
                transition: { duration: 0.4 },
              }}
              className="absolute inset-0 bg-white p-5 shadow-xl rounded-2xl border border-black/5"
            >
              <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden mb-4 rounded-lg">
                <Image src={memory.src || "/placeholder.svg"} alt={memory.caption} fill className="object-cover" />
              </div>
              <p className="font-serif text-gray-800 text-center text-lg">{memory.caption}</p>

              {/* Polaroid Dots */}
              <div className="flex gap-1 justify-center mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/20" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <p className="text-white/60 font-sans uppercase tracking-widest text-xs animate-pulse">
        Tap the photo to continue
      </p>
    </div>
  )
}
