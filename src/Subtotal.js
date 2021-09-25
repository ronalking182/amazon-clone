import React,{useContext} from 'react'
import "./Subtotal.css"
// import CurrencyFormat from 'react-currency-format'
import { StateContext } from './StateProvider'

export default function Subtotal({Amount}) {
    const {Basket} = useContext(StateContext)
    return (
        <div className="subtotal">
    <p>
        Subtotal ({Basket.length} item): <strong>{Amount}</strong>
    </p>
    <small className="subtotal__gift">
        <input type="checkbox" /> This order contains
    </small>
             <button>Proceed to checkout</button>
        </div>
    )
}
