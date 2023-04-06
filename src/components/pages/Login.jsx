import React from 'react';
import { NavLink } from "react-router-dom";


function Login() {
    return (
        <div className="absolute bg-white px-auto pt-16 w-full pb-20">
    <h2 className=" mx-auto my-5 w-1/2  p-2 text-center text-4xl font-semibold text-amber-900 shadow-amber-500/50 drop-shadow-md">Login</h2>
    <div className="mt-8 mx-auto md:max-w-md w-3/4">
    <div className="grid grid-cols-1 gap-6">
        <label className="block">
            <span className="text-gray-700">Full name</span>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" placeholder="" required/>
        </label>
        <label className="block">
            <span className="text-gray-700">Email address</span>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" placeholder="grace@example.com" required/>
        </label>
        <label className="block">
            <span className="text-gray-700">When is your birthday?</span>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
            <span className="text-gray-700">What is your age?</span>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" />
        </label>
        <div className="block">
            <div className="mt-2">
                <div className="mt-4 flex items-center">
                    <input className="mr-2 text-purple-400 focus:ring-purple-400" type="checkbox" name="checkbox" id="" />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <div className="flex justify-around">
                    <input type="submit" value='Login' className="mt-4 w-1/3 rounded-lg bg-amber-500 px-4 py-2 text-lg tracking-wide text-white duration-200 hover:bg-amber-600 active:bg-amber-900 active:ring-2"/>
                    <NavLink to='/sandwiches' className='mt-4 ml-2 w-2/3 text-center rounded-lg bg-amber-500 px-2 py-3 text-lg text-white duration-200 hover:bg-amber-600 active:bg-amber-900 active:ring-2'>Back To Store</NavLink>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>

    )
}

export default Login