import { useState } from "react";
import { useAi } from "./context/AiContext";

const Popup = () => {
  const [query, setQuery] = useState("");
  const { setUserPrompt, generateResponse } = useAi();

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setUserPrompt(query);
    await generateResponse();
    setQuery("");
  };

  return (
    <div className="w-80 p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold text-indigo-600">Page Guru</h1>
        <p className="text-gray-700 text-sm">
          Your personal AI assistant for understanding any webpage.
        </p>
      </div>

      <div className="mt-6 text-gray-600 text-sm space-y-3">
        <p>🧠 Ask questions about the content.</p>
        <p>📝 Get instant summaries.</p>
        <p>🔍 Turn complex content into simple insights.</p>
        <p>🚀 All without leaving the page!</p>
      </div>

      <div className="mt-6 space-y-2">
        <input
          type="text"
          placeholder="Ask something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className="w-full px-4 py-2 border border-indigo-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition-colors"
        >
          Ask
        </button>
      </div>

      <p className="text-[10px] text-gray-400 text-center mt-4">
        Works silently in the background on supported sites.
      </p>
    </div>
  );
};

export default Popup;
