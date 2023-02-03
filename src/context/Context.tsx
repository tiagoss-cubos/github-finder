import { createContext, useState } from "react";

import { UserProps } from "../types/user";

export const Context = createContext<UserProps | null>(null);

const ContextProvider = ({ children }: any) => {
  const [teste, setTeste] = useState<UserProps | null>(null);

  const newTeste = () => {
    setTeste({... });
  };
  return (
    <Context.Provider value={}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider
