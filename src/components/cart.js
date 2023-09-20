import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../assets/css/cart.css';
const Cart = ({cart, setCart}) => {
    // increace qty
    const incqty = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((product) => 
        {
            return product.id === product.id ? {...exsit, qty: exsit.qty + 1} : product
        }))
    }

    // Dec Qty
    const decqty = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((product) => 
        {
            return product.id === product.id ? {...exsit, qty: exsit.qty - 1} : product
        }))
    }
    //Remove cart product
    const removeproduct = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x) => 
            {
                return x.id !== product.id
            }))
        }
    }
    // Total price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='cartcontainer'>
        {cart.length === 0 && 
        <div className='emptycart'>
        <h2 className='empty'>Cart is Empty</h2>
        <Link to='/product' className='emptycartbtn'>Shop Now</Link>
        </div>
        }
        <div className='contant'>
            {
                cart.map((product) => 
                {
                    return(
                        <div className='cart_item' key={product.id}>
                            <div className='img_box'>
                                <img src={product.Img} alt={product.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{product.Cat}</h4>
                                <h3>{product.Title}</h3>
                                <p>Price: ${product.Price}</p>
                                <div className='qty'>
                                    <button className='incqty' onClick={() => incqty(product)}>+</button>
                                    <input type='text' value={product.qty}></input>
                                    <button className='decqty' onClick={() => decqty(product)}>-</button>
                                </div>
                                <h4 className='subtotal'>sub total: ${product.Price * product.qty}</h4>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeproduct(product)}><AiOutlineClose /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>total: $ {Totalprice}</h2>
            <button className='checkout'>Checkout</button>
            </>
        }
    </div>
    </>
  )
}

export default Cart