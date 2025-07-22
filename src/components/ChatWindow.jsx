import { useAi } from "../context/AiContext";

function ChatWindow() {
  const { messages, input, setInput, loading, send } = useAi();

  const handleSubmit = () => {
    if (input.trim() && !loading) {
      send();
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow-xl rounded-xl transition-all duration-500">
      <div className="h-64 overflow-y-auto border rounded p-2 mb-4">
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`mb-2 ${
                m.role === "user" ? "text-right" : "text-left"
              }`}
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
        {loading && (
          <div className="text-left mb-2">
            <span className="inline-block px-3 py-2 rounded-lg bg-gray-100 text-gray-800">
              AI is typing...
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
          placeholder="Ask something..."
          disabled={loading}
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
