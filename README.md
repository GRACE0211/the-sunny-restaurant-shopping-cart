## 使用 context 三步驟

> 在App.js最外層要先引入``` import xxxContextProvider from './context/xxxcontext'; ```, 並且在最外層div裡面包裹
> ``` <xxxContextProvider></xxxContextProvider> ```

1. create context: xxxContextProvider
    ```
    import { createContext } from 'react';
    export const xxxContext = createContext(null);
    ```

2. use context: 需要使用到context的各種組件
    ```
    import { useContext } from 'react';
    import { xxxContext } from './xxxContext.jsx';
    ```


3. provide the context : 用 context 定義脈絡
    ```
    > 在 create context (xxxContextProvider) 同個檔案寫

    const contextValue = {
        // 元件裡的函式
    }
    return (
        <xxxContext.Provider value={contextValue}>
        {props.children}
        </xxxContext.Provider>
    )
    ```

    ```
    > 在使用 xxxContext (需要使用到context的各種組件) 同個檔案寫

    1. class 組件寫法
    static contextType = xxxContext;
    const { // 元件裡的函式 } = this.context; // 寫在render裡面 ex: cart.jsx

    2. function 組件寫法
    const { // 元件裡的函式 } = useContext(xxxContext); // ex: CartItem.jsx

    => 之後就可以在render裡面直接調用函式
    ```



## 常見的React Hook：

1. useState： 讓你在 functional component 中使用 state。
2. useEffect： 讓你在 functional component 中使用 side effects，例如訂閱 API 或設定計時器。
3. useContext： 讓你在 functional component 中使用 React context。
4. useReducer： 讓你在 functional component 中使用 Redux-style reducers。
5. useCallback： 讓你緩存一個 callback 函式，以減少在渲染期間的重複建立。
6. useMemo： 讓你緩存一個計算結果，以減少在渲染期間的重複計算。
7. useRef： 讓你建立一個可持續的參照，以便在渲染之間存儲和訪問值。
8. useLayoutEffect： 像 useEffect，但會在 DOM 更新之前執行。
9. useImperativeHandle： 允許你自定義使用 ref 屬性公開給父組件的實例值。
10. useMemo： 用來進行一些複雜的計算，優化渲染性能，因為當它的依賴沒有改變的時候，它可以返回上一次的值，避免重複計算。


## shopping cart 上面的數字
因為content的資料只能上傳下, 所以從every page的route解決
> cart, drinks, hamburgers, login, omelettes,pancakes,sandwiches
```
import React, { useContext } from 'react'
...
import { ShopContext } from '../../context/shop-context';
import { ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export default function Drinks() {
    ...
    <!-- 使用useContext方法向下傳遞資料 -->
    const { getTotalCartCount } = useContext(ShopContext);
    const count = getTotalCartCount();
    return (
        <div className="mx-auto pt-16 mb-20 w-10/12 rounded-xl md:w-8/12 flex flex-wrap gap-5">
        ...
            <NavLink to='/cart'>
                <ShoppingCart size={24}  weight="bold"/>
                <span>{count}</span>
            </NavLink>
        </div>
        
    )
}

```

