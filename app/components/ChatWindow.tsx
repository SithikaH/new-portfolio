"use client";

import { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";

interface ChatWindowProps {
  onClose: () => void;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 **Welcome!**\n\nI'm **Portfolio AI**, your personal assistant.\n\nAsk me anything about:\n\n• My Projects\n• Skills\n• Experience\n• Education\n• Awards\n• Certifications\n• Contact Information",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = (question: string) => {
    const userMessage: Message = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "🚀 This is a placeholder response.\n\nOnce the RAG backend is connected, I'll answer using your resume, portfolio, certificates, and projects.",
        },
      ]);

      setLoading(false);
    }, 1200);
  };

  return (
    <div
      className="
      w-[430px]
        max-h-[80vh]
        h-[620px]

      rounded-3xl

      overflow-hidden

      bg-gradient-to-br
      from-[#111827]/95
      via-[#0B1220]/95
      to-[#020617]/95

      backdrop-blur-2xl

      border
      border-cyan-400/20

      shadow-[0_20px_70px_rgba(0,0,0,.45)]

      flex
      flex-col
    "
    >
      {/* Header */}

      <ChatHeader onClose={onClose} />

      {/* Suggested Questions */}

      {messages.length === 1 && (
        <div className="px-4 pt-4">
          <SuggestedQuestions onSelect={sendMessage} />
        </div>
      )}

      {/* Messages */}

      <div
        className="
        flex-1
        overflow-y-auto
        px-4
        py-4
        space-y-2
        min-h-0
        "
        >
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>

      {/* Input */}

      <div
        className="
            p-4
            border-t
            border-white/10
            bg-[#0B1220]
            sticky
            bottom-0
        "
        >
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}