import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { createContext, useContext, useState, useEffect } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log("userInfo", userInfo);
      setUser(userInfo);
      if (!userInfo) {
        history?.push("/");
      }
    } catch (err) {}
  }, [history]);
  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};
export default ChatProvider;
