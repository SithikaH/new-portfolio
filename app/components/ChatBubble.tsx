"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User } from "lucide-react";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBubble({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex items-end gap-3 my-5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
          <Bot size={18} className="text-white" />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`
          max-w-[80%]
          rounded-3xl
          px-5
          py-4
          shadow-lg
          border
          transition-all
          duration-300

          ${
            isUser
              ? "bg-cyan-500 text-white border-cyan-400 rounded-br-md"
              : "bg-[#1B2232]/90 text-gray-200 border-white/10 rounded-bl-md backdrop-blur-md"
          }
        `}
      >
        <div className="prose prose-invert prose-sm max-w-none text-[13px] leading-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0 shadow-lg">
          <User size={18} className="text-white" />
        </div>
      )}
    </div>
  );
}