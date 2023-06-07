import { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatActive, setChatActive] = useState(false);

  return (
    <>
        <ChatContext.Provider value={{ chatActive, setChatActive }}>
        {children}
        </ChatContext.Provider>
    </>
  );
};