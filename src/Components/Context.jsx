import { createContext,useState } from "react";

export const MyContext = createContext();
export const Myprovayder = ({ children }) => {
  const [minu, setMinu] = useState(false);
  return <MyContext.Provider value={{minu,setMinu}}>
    {children}
  </MyContext.Provider>
};
