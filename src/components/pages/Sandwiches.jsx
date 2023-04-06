import React, { useContext } from 'react'
import StoreItem from '../StoreItem/index'
import storeItems from '../data/items.json'
import { ShopContext } from '../../context/shop-context';
import { ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';



export default function Sandwiches() {
    const filteredType = storeItems.filter(
        (item) => item.type === 'Sandwiches'
    );
    const { getTotalCartCount } = useContext(ShopContext);
    const count = getTotalCartCount();
    return (
        <div className="mx-auto mb-20 flex w-10/12 flex-wrap gap-5 rounded-xl pt-16 md:pl-8 md:w-8/12 md:justify-between">
        {filteredType.map(item => (
            <StoreItem {...item}  key={item.id}/>
            ))}
            <NavLink to='/cart' className=" z-50 fixed h-12 w-12 right-5 bottom-16 items-center rounded-full bg-amber-800 hover:bg-amber-50 text-amber-50 hover:text-amber-800 shadow-amber-900/40 drop-shadow-md duration-300 transition hover:scale-105 ease-in-out">
                <ShoppingCart size={24}  weight="bold"  className="relative left-3 top-3"/>
                <span className="absolute -right-2 -top-3 h-7 w-7 rounded-full shadow-amber-500/50 drop-shadow-sm bg-amber-500 flex justify-center items-center">{count}</span>
            </NavLink>
        </div>
            )
}


