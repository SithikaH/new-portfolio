interface Props {
  onSelect: (question: string) => void;
}

const suggestions = [
  "Tell me about yourself",
  "Show your latest projects",
  "What technologies do you know?",
  "Tell me about your internship",
  "Show your awards",
  "How can I contact you?"
];

export default function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {suggestions.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="
                    rounded-full
                    border
                    border-cyan-500
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    hover:bg-cyan-500
                    hover:text-white
                    transition
                    "
        >
          {item}
        </button>
      ))}
    </div>
  );
}