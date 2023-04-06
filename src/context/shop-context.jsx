import React, { createContext, useState } from 'react'
import storeItems from '../components/data/items.json'


export const ShopContext = createContext(null);
// 先列出預設購物車內商品數量{id:value} -> {1:0,2:0,3:0...}
const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i<storeItems.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

export default function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // 計算購物車內商品總金額 -> cart.jsx
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = storeItems.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    // 購物車route右上角的數字, 計算購物車內商品數量 -> cart/Drinks/Hamburgers/Omelettes/Pancakes/Sandwiches.jsx
    const getTotalCartCount = () => {
        let count = 0;
        for(const item in cartItems){
            count += cartItems[item];
        }
        return count;
    }

    // CartItem.jsx檔案裡的 '+' button
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    // CartItem.jsx檔案裡的 '-' button
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    // CartItem.jsx檔案裡的input框框, 讓購物車的數量和選單中顯示的一致
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }


    // 元件中傳遞資料
    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount, 
        getTotalCartAmount,
        getTotalCartCount
    }
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
}
