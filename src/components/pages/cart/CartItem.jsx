import React, { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context';

export default function CartItem(props) {
    const { id, title, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
    <div className="w-1/2 mx-auto my-5 bg-orange-100 p-3 rounded-md shadow-amber-500/50 drop-shadow-md">
        <div className="text-center space-x-5 m-2">
        <span className="text-lg text-amber-900 font-bold">{title}</span>
        <span className="text-lg text-amber-900 font-bold">${price}</span>
        </div>
        <div className="text-center m-2">
            <button onClick={()=>{removeFromCart(id)}} className="text-lg text-amber-900 font-bold">-</button>
            <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id) } className="w-10 mx-3 text-center border-2 border-orange-300 rounded-md shadow-amber-500/50 drop-shadow-md"/>
            <button onClick={()=>{addToCart(id)}} className="text-lg text-amber-900 font-bold">+</button>
        </div>
    </div>
    )
}
