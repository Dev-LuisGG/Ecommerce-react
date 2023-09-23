import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import '../assets/css/footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.svg' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Somos un equipo de diseñandores y desarolladores bien vergudos que creamos WordPress de alta calidad</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>Mi Cuenta</h3>
                <ul>
                    <li>Cuenta</li>
                    <li>Pedido</li>
                    <li>Carrito</li>
                    <li>Envío</li>
                    <li>Devolución</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Páginas</h3>
                <ul>
                    <li>Inicio</li>
                    <li>About</li>
                    <li>Contacto</li>
                    <li>Términos y condiciones</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer