import { createContext, useContext, useState } from "react";
import OpenAI from "openai";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem("OPENAI_KEY") || "";
  });

  const saveKey = (k) => {
    localStorage.setItem("OPENAI_KEY", k);
    setApiKey(k);
  };

  const getClient = () => {
    return new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
  };

  const send = async () => {
    if (!input.trim() || !apiKey) return;
    const newUserMessage = { role: "user", content: input };
    setMessages((m) => [...m, newUserMessage]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const ai = getClient();
      const res = await ai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [...messages, newUserMessage],
        temperature: 0.7,
      });
      const assistantMsg = res.choices[0].message;
      setMessages((m) => [...m, assistantMsg]);
    } catch (e) {
      console.error(e);
      setError(e.message || "Request Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AiContext.Provider
      value={{
        messages,
        input,
        setInput,
        loading,
        error,
        apiKey,
        setApiKey,
        saveKey,
        send,
      }}
    >
      {children}
    </AiContext.Provider>
  );
};

export const useAi = () => useContext(AiContext);
