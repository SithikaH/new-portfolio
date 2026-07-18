"use client";

import { Bot, Sparkles, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[#111827]/95 via-[#0B1220]/95 to-[#111827]/95 backdrop-blur-xl">

      {/* Left */}
      <div className="flex items-center gap-3">

        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Bot size={22} className="text-white" />
          </div>

          {/* Online Indicator */}
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#111827]" />
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg">
            Portfolio AI
          </h2>

          <p className="text-xs text-zinc-400 flex items-center gap-1">
            <Sparkles size={12} className="text-cyan-400" />
            Powered by RAG
          </p>
        </div>

      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
      >
        <X size={18} />
      </button>

    </div>
  );
}