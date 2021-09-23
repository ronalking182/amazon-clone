import { createContext, useReducer } from "react";
import Reducer from "./Reducer"


export const StateContext = createContext()

export const StateProvider = ({ children}) =>{
    const initialState = {
        Basket:[]
    }
    const [state, dispatch] = useReducer(Reducer, initialState)
    const addToBasket =(item)=>{
        dispatch({type:"ADD", payload:item})
    }
    const removeFromBasket =(id)=>{
        dispatch({type:"REMOVE", payload:id})
    }
   return <StateContext.Provider value={{
      Basket:state.Basket,
      addToBasket,
      removeFromBasket
   }}>
     {children}
    </StateContext.Provider>
}

