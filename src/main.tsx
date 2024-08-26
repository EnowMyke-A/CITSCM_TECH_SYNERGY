import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import { GoogleGenerativeAI} from "@google/generative-ai";

// const API_KEY = "AIzaSyBXanBrQOiU9qP1DrSnaic967YB2nJRMrs";
// const genAI = new GoogleGenerativeAI(API_KEY);

// type ChatPart = {
//   text: string;
// };

// type ChatMessage = {
//   role: "user" | "model";
//   parts: ChatPart[];
// };

  // const generateAnswer = async () => {
  //   setShowSkeloton(true)
  //   const msg = question;

  //   console.log(question, 'msg', msg)
    
  //   setChatHistory((prevChatHistory) => [
  //     ...prevChatHistory,
  //     {
  //       role: "user",
  //       parts: [{ text: question }],
  //     },
  //   ]);

  //   try {
  //     const chat = model.startChat({
  //       history: chatHistory,
  //       generationConfig: {
  //         maxOutputTokens: 500,
  //       },
  //     });

  //     const { response } = await chat.sendMessage(msg);
  //     const text = await response.text();
    
  //     setShowSkeloton(false);
  //     setChatHistory((prevChatHistory) => [
  //       ...prevChatHistory,
  //       {
  //         role: "model",
  //         parts: [{ text }],
  //       },
  //     ]);
      
  //     setQuestion(""); 
  //   } catch (error) {
  //     console.error("Error generating answer:", error);
  //   }
  // };