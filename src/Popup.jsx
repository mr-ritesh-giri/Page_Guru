import { useState } from "react";
import HomeWindow from "./components/HomeWindow";
import ChatWindow from "./components/ChatWindow";

const Popup = () => {
  const [apiKey, setApiKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleContinue = () => {
    console.log("Handle Continue Clicked");

    if (apiKey.trim().startsWith("sk-")) {
      setIsAuthenticated(true);
    } else {
      alert("Please enter a valid OpenAI API key.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 transition-all duration-700">
      {!isAuthenticated ? (
        <div>
          <HomeWindow
            apiKey={apiKey}
            setApiKey={setApiKey}
            handleSubmit={handleContinue}
          />
        </div>
      ) : (
        <div>
          <ChatWindow apiKey={apiKey} />
        </div>
      )}
    </div>
  );
};

export default Popup;
