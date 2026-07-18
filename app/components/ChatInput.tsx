"use client";

import { useRef, useState } from "react";
import { SendHorizonal, Sparkles } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "48px";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    const textarea = e.target;
    textarea.style.height = "48px";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <div className="flex items-end gap-3">

      {/* Input Container */}
      <div className="flex flex-1 items-end rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl px-4 py-3 transition-all duration-300 focus-within:border-cyan-400 focus-within:shadow-[0_0_15px_rgba(6,182,212,0.25)]">

        <Sparkles
          size={18}
          className="text-cyan-400 mr-3 mb-2 flex-shrink-0"
        />

        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Ask me anything about Sithika..."
          className="
            w-full
            resize-none
            bg-transparent
            text-white
            placeholder:text-zinc-500
            outline-none
            text-sm
            leading-6
            max-h-40
            overflow-y-auto
          "
        />
      </div>

      {/* Send Button */}
      <button
        onClick={handleSend}
        disabled={!message.trim()}
        className="
          h-12
          w-12
          rounded-full
          bg-cyan-500
          hover:bg-cyan-400
          disabled:bg-zinc-700
          disabled:cursor-not-allowed
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-300
          hover:scale-110
          shadow-lg
          shadow-cyan-500/30
        "
      >
        <SendHorizonal size={18} />
      </button>

    </div>
  );
}