import { createContext, useContext } from "react";

const balanceContext = createContext()

export default balanceContext;

export function useBalance(){
 return useContext(balanceContext)
}