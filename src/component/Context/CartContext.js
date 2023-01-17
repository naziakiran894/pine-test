import React, { useContext, useReducer } from 'react'
import { createContext, useCardContext } from 'react'

const CardContext = createContext()

const initialState = {
  card :[],
  total_item:"",
  total_amount:"",
  shipping_fee:"50000"

}

const CardProvider  = ({children})=>{

  const [state , dispatch] = useReducer(reducer,initialState);

  const addToCart=(thumbnail, title, price, product) =>{
    dispatch({type:"ADD_TO_CARD", payload:{thumbnail, title, price, product}})

  }

  const useCardContext = ()=>{
    return useContext(CardContext)
  }
  

return(
  <CardContext.Provider value={{...state.addToCart}}>
    {children}
    </CardContext.Provider>
)
}


export default CardContext