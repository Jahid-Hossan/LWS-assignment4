import { createContext } from "react";

const AiContext = createContext();

export default function AiContextProvider({ children }) {
  const AiContextProviderData = "jahid";

  return (
    <>
      <AiContext.Provider value={AiContextProviderData}>
        {children}
      </AiContext.Provider>
    </>
  );
}
