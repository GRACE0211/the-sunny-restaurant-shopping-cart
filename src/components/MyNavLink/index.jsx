import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 


export default class MyNavLink extends Component {
    render() {
    return <NavLink {...this.props} className="md:block md:border-b-2 font-semibold md:border-slate-300 md:bg-slate-200 md:text-amber-800 md:p-2 md:hover:text-amber-500"/>
    
    }
}
