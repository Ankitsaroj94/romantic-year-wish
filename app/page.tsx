"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { StarField } from "@/components/star-field"
import { Gateway } from "@/components/gateway"
import { DeClutter } from "@/components/de-clutter"
import { MemoryVault } from "@/components/memory-vault"
import { GoldenTicket } from "@/components/golden-ticket"
import { FinalReveal } from "@/components/final-reveal"

export default function NewYearApp() {
  const [step, setStep] = useState(0)

  const nextStep = () => setStep((s) => s + 1)

  return (
    <main className="relative h-screen w-full flex items-center justify-center">
      <StarField />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="z-10 w-full h-full"
          >
            <Gateway onComplete={nextStep} />
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="declutter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 w-full h-full"
          >
            <DeClutter onComplete={nextStep} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="vault"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 w-full h-full"
          >
            <MemoryVault onComplete={nextStep} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="ticket"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="z-10 w-full h-full"
          >
            <GoldenTicket onComplete={nextStep} />
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-10 w-full h-full">
            <FinalReveal />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
