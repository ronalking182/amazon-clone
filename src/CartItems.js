import React,{useContext} from 'react'
import { StateContext } from './StateProvider'
import "./CartItems.css"

export default function CartItems({title, id, price, image, rating,counterHandler}) {
    const { removeFromBasket} = useContext(StateContext)

 
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title}/>
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price"><small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">{Array(rating).fill().map((_)=>(
                <p>⭐️</p>
              ))}</div>
                <button onClick={()=>removeFromBasket(id)}>Remove from basket</button>
            </div>
                          {/* <div>
                <button onClick={decrementHandler}>-</button>
                <span>{counter}</span>
                <button onClick={incrementHandler}>+</button>
            </div> */}
        </div>
    )
}
