import { useState } from "react";
import HomeWindow from "./components/HomeWindow";
import ChatWindow from "./components/ChatWindow";
import { AiProvider, useAi } from "./context/AiContext";

const Popup = () => {
  const { apiKey, setApiKey } = useAi();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleContinue = () => {
    if (apiKey.trim().startsWith("sk-")) {
      localStorage.setItem("OPENAI_KEY", apiKey.trim());
      setIsAuthenticated(true);
    } else {
      alert("Please enter a valid OpenAI API key.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 transition-all duration-700">
      {!isAuthenticated ? (
        <HomeWindow
          apiKey={apiKey}
          setApiKey={setApiKey}
          handleSubmit={handleContinue}
        />
      ) : (
        <AiProvider>
          <ChatWindow />
        </AiProvider>
      )}
    </div>
  );
};

export default Popup;
