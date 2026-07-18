export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-zinc-800 rounded-2xl px-5 py-3 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
        <span
          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></span>
        <span
          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></span>
      </div>
    </div>
  );
}