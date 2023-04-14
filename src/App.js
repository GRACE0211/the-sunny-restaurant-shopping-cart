import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import MyNavLink from './components/MyNavLink/index';
import Header from './components/Header/Header';
import Cart from './components/pages/cart/cart.jsx';
import Sandwiches from './components/pages/Sandwiches';
import Hamburgers from './components/pages/Hamburgers';
import Omelettes from './components/pages/Omelettes';
import Pancakes from './components/pages/Pancakes';
import Drinks from './components/pages/Drinks';
import Login from './components/pages/Login';
import { User } from 'phosphor-react';
import ShopContextProvider from './context/shop-context';


export default class App extends React.Component {
  render(){
    console.log();
    return (
      <div className='box-border relative "wow-container"'>
        <ShopContextProvider>
        <div className="hidden z-50 fixed w-full justify-between bg-amber-900 md:flex shadow-md shadow-orange-900/50">
        <div className="md:ml-10">
        <div className="flex">
          {/* <img src="../public/76072F14-6CA0-4AEF-A008-415D39625DE2.png" alt="the sunny restaurant logo"/> */}
          <p className="py-2 px-1 font-bold text-lg text-amber-300 md:inline-block">THE SUNNY RESTAURANT</p>
        </div>
      </div>
      <ul className="md:mr-10 flex items-center">
        <li className="px-4 py-2 font-bold text-lg text-amber-100 transition hover:bg-orange-700 md:inline-block">MENU</li>
        <li className="px-4 py-2 font-bold text-lg text-amber-100 transition hover:bg-orange-700 md:inline-block">SURVEY FORM</li>
          <NavLink to='/login'  className="px-4 h-full font-bold text-lg text-amber-100 transition hover:bg-orange-700 md:inline-block">
          <User size={24}  weight="bold" className="h-full"/>
          </NavLink>
      </ul>
    </div>
    <Header/>

        <div className="hidden bg-slate-300 mb-4 text-left md:fixed md:left-5 lg:left-10 md:top-16 md:flex md:shrink md:flex-col md:rounded-md overflow-hidden shadow-md shadow-gray-900/50 md:w-32 ">
        <MyNavLink to='/sandwiches'>Sandwiches</MyNavLink>
        <MyNavLink to='/hamburgers'>Hamburgers</MyNavLink>
        <MyNavLink to='/pancakes'>Pancakes</MyNavLink>
        <MyNavLink to='/omelettes'>Omelettes</MyNavLink>
        <MyNavLink to='/drinks'>Drinks</MyNavLink>
        </div>
        
      
        
        <Routes>
        <Route path='/' element={<Sandwiches/>}/>
          <Route path='sandwiches' element={<Sandwiches/>}/>
          <Route path='hamburgers'element={<Hamburgers/>}/>
          <Route path='pancakes'element={<Pancakes/>}/>
          <Route path='omelettes'element={<Omelettes/>}/>
          <Route path='drinks'element={<Drinks/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>

        <div className=" h-10 bg-amber-400 fixed bottom-0 w-full">
          <div className="text-center pt-2">
              <span className="ml-2">&copy; GRACE JHUO</span>
              <span className="ml-2">聯絡信箱</span>
              <span className="ml-2">關於我</span>
          </div>
        </div>
        </ShopContextProvider>
      </div>
    );
  }
}



