"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed bottom-6 right-6 z-[999]"
          >
            <ChatWindow onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide floating button when chat is open */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed
            bottom-6
            right-6
            z-[999]
            w-14
            h-14
            rounded-full
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            shadow-lg
            shadow-cyan-500/30
            transition-all
            duration-300
            hover:scale-110
            flex
            items-center
            justify-center
          "
        >
          <Bot size={24} />
        </button>
      )}
    </>
  );
}