function HomeWindow({ apiKey, setApiKey, handleSubmit }) {
  return (
    <div className="w-80 p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold text-indigo-600">Page Guru</h1>
        <p className="text-gray-700 text-sm">
          Your personal AI assistant for understanding any webpage.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <label className="block text-xs text-gray-600">
          Enter your OpenAI API Key
        </label>
        <input
          type="password"
          placeholder="sk-..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className="w-full px-4 py-2 border border-indigo-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition-colors"
        >
          Continue
        </button>
      </div>

      <div className="mt-6 text-gray-600 text-sm space-y-3">
        <p>✅ We never store your API key.</p>
        <p>🧠 Used locally to answer your questions.</p>
        <p>🔒 Only you can access your key.</p>
      </div>
    </div>
  );
}

export default HomeWindow;
