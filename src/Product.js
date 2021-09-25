import React, {useContext} from 'react'
import "./Product.css"
import { StateContext } from './StateProvider'

function Product({id, title, image, price, rating}) {
    const {addToBasket} = useContext(StateContext)
    // const [counter, setCounter] = useState(1)
    // const incrementHandler =()=>{
    //     setCounter(prev => prev + 1)
    // }
    // const decrementHandler =()=>{
    //     setCounter(prev => Math.max(prev - 1,1))
    // }
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
               {Array(rating).fill().map((_)=>(
                  <p>⭐️</p>
               ))}
            </div>
            </div>
            <img src={image} alt={title}/>
            {/* <div>
                <button onClick={decrementHandler}>-</button>
                <span>{counter}</span>
                <button onClick={incrementHandler}>+</button>
            </div> */}
            <button onClick={()=>addToBasket({
                 id:id,
                 title:title,
                 price:price,
                 image:image,
                 rating:rating
            })}>Add to basket</button>
            
        </div>
    )
}

export default Product
