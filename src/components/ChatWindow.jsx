import { useState } from "react";
import { useAi } from "../context/AiContext";

function ChatWindow() {
  const [query, setQuery] = useState("");
  const { messages } = useAi();

  const handleSubmit = () => {
    console.log("Clicked")
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow-xl rounded-xl transition-all duration-500">
      <div className="h-64 overflow-y-auto border rounded p-2 mb-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 ${m.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                m.role === "user"
                  ? "bg-indigo-100 text-indigo-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {m.content}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
          placeholder="Ask something..."
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
