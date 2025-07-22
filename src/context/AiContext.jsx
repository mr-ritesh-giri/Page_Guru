import { createContext, useContext, useState } from "react";
import OpenAI from "openai";
import genAiPrompts from "../content/genAiPrompts";

const AiContext = createContext();

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const AiProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: genAiPrompts,
    },
  ]);
  const [aiResponse, setAiResponse] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const generateResponse = async () => {
    try {
      setLoading(true);

      const newMessages = [...messages, { role: "user", content: userPrompt }];

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: newMessages,
        temperature: 0.7,
      });

      const botReply =
        response.choices[0]?.message?.content?.trim() || "No response";

      setMessages([
        ...newMessages,
        { role: "user", content: userPrompt },
        { role: "assistant", content: botReply },
      ]);
      setAiResponse(botReply);
    } catch (err) {
      console.error("OpenAI error:", err);
      setAiResponse("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AiContext.Provider
      value={{ aiResponse, generateResponse, loading, messages, setUserPrompt }}
    >
      {children}
    </AiContext.Provider>
  );
};

export const useAi = () => useContext(AiContext);
