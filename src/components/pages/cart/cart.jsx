import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import storeItems from '../../data/items.json'
import { ShopContext } from '../../../context/shop-context';
import CartItem from './CartItem';
import { ShoppingCart } from 'phosphor-react';

export default class Cart extends Component {
    static contextType = ShopContext;

    render() {
        const { cartItems, getTotalCartAmount,getTotalCartCount } = this.context;
        // 利用函數傳遞資料
        const totalAmount = getTotalCartAmount();
        const count = getTotalCartCount();
        const filteredProduct = storeItems.filter(
            (product) => cartItems[product.id] !== 0
        );
    return (
        <div className='pt-16'>
                <h1 className=" mx-auto my-5 w-1/2  p-2 text-center text-4xl font-semibold text-amber-900 shadow-amber-500/50 drop-shadow-md">Your Cart Items</h1>
                <div >
                {
                    filteredProduct.map(product => (
                        <CartItem key={product.id} data={product} />
                    ))
                }
                </div>
                <div className="w-2/5 mx-auto mt-5 pb-20">
                    <p className="text-center text-lg text-amber-900 shadow-amber-500/50 drop-shadow-md font-extrabold">Subtotal: ${totalAmount}</p>
                </div>
                <NavLink to='/cart' className=" z-50 fixed h-12 w-12 right-5 bottom-16 items-center rounded-full bg-amber-800 hover:bg-amber-50 text-amber-50 hover:text-amber-800 shadow-amber-900/40 drop-shadow-md duration-300 transition hover:scale-105 ease-in-out">
                    <ShoppingCart size={24}  weight="bold"  className="relative left-3 top-3"/>
                    <span className="absolute -right-2 -top-3 h-7 w-7 rounded-full shadow-amber-500/50 drop-shadow-sm bg-amber-500 flex justify-center items-center">{count}</span>
                </NavLink>
        </div>
    )
    }
}



