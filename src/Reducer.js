export default function Reducer(state, action){
    switch(action.type){
         case "ADD":{
            //  const updatedItem = state.Basket.concat(action.payload)
             return{
                //  updatedItem
                ...state,
                Basket:[...state.Basket, action.payload]
             }
         }
         case "REMOVE":{
             return{
                 ...state,
                Basket:state.Basket.filter(c=> c.id !== action.payload)
             }
         }
         default :
        return state;
    }
}
 
