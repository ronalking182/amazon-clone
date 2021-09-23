import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { BiSearch} from "react-icons/bi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { StateContext } from './StateProvider'


export default function Header() {
    const {Basket} = useContext(StateContext)
    const items = Basket?.length
    return (
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <BiSearch className="header__searchIcons"/>
            </div>
            <div className="header__nav">

            <Link to="/login" className="header__link">
                <div className="header__option">          
                    <span className="header_optionLineOne">Hello Qazi</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
            </Link>

            <Link to="/" className="header__link">
                <div className="header__option">          
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">Orders</span>
                </div>
            </Link>

            <Link to="/" className="header__link">
                <div className="header__option">          
                    <span className="header_optionLineOne">Yours</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </Link>

            </div>
            <Link className="header__link" to="/checkout">
                <div className="header__optionBasket">
                    <AiOutlineShoppingCart/>
                    <span className="header__optionLineTwo header__basketCount">{items}</span>
                </div>
            </Link>
        </nav>
    )
}

