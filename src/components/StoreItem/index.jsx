import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ShopContext } from '../../context/shop-context';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class StoreItem extends Component {
    static contextType = ShopContext;

    state = {
        id:'',
        title:'',
        price:'',
        image:''
    }
    componentDidMount(){
        this.setState({id:this.props.id})
        this.setState({title:this.props.title})
        this.setState({price:this.props.price})
        this.setState({image:this.props.image})
        AOS.init({
            duration: 1000,
        });
    }

    static propTypes = {
        title:PropTypes.string,
        price:PropTypes.number
    }
    
    render(){
        const { addToCart, cartItems } = this.context;
        const cartItemAmount = cartItems[this.state.id];
        return(
            <div className="mx-auto lg:mx-0 md:w-max w-full overflow-hidden rounded-xl bg-white shadow-md transition duration-300 ease-in-out hover:scale-95 hover:bg-amber-300 hover:text-amber-50 md:max-w-2xl " data-aos="fade-left" data-aos-once="true">
                <div className=" max-w-md md:flex md:items-center">
                    <div className="overflow-hidden md:shrink-0">
                    <img className="h-40 w-full object-cover transition duration-300 ease-in-out md:h-48 md:w-60" src={this.state.image} alt="Modern building architecture" />
                </div>
                <div className="p-4">
                    <div className="text-sm font-extrabold uppercase text-amber-800">{this.state.title}</div>
                        <p className="font-bold">$ {this.state.price}</p>
                        <button onClick={() => addToCart(this.state.id)}  className="z-0 mt-4 items-center rounded-lg bg-amber-600 px-2 py-1 text-sm font-bold text-white shadow-amber-500/50 drop-shadow-md opacity-80 transition duration-300 ease-in-out hover:border-transparent hover:bg-amber-50 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2">
                            Add To Cart  { cartItemAmount > 0 && <>( {cartItemAmount} )</> }
                        </button>
                    </div>
                </div>
                
            </div>
        )
    }
}





