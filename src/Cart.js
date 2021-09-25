import React, {useContext} from 'react'
import CartItems from './CartItems'
import { StateContext } from './StateProvider'
import "./Cart.css"
import Subtotal from './Subtotal'

export default function Cart() {
 const {Basket} = useContext(StateContext)

   const Amount = Basket.reduce((total, item)=> total + item.price,0)

    return (
        <div className="checkout">
            <div>
            <img className="checkout__ad " src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon Ad"/>
            {Basket.length === 0 ? <div>
                <h2>Your Shopping Basket Empty </h2>
                <p>Your have no item in your basket. To buy one or more items, "Add to basket" next to item.</p>
                </div>: 
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>}
            {
                Basket.map(items => {
                    return <CartItems title={items.title} key={items.id} id={items.id} price={items.price} image={items.image} rating={items.rating} />
                })
            }
            </div>
      {Basket.length > 0 && 
        <div className="checkout__right">
          <h1>Subtotal</h1>
          <Subtotal Amount={Amount}/>
          </div> }    
         </div>
    )
}
