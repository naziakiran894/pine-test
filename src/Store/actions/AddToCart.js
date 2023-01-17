import { ADD_TO_CART, GET_TOTAL, REMOVE_ITEM } from "../Type";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const removeItem = (id)=>{
  return{
    type:REMOVE_ITEM ,
    payload:id,
  };
}

  export const getTotal = (payload)=>{
    return{
      type:GET_TOTAL,
      payload:payload,
    }
   
  }

