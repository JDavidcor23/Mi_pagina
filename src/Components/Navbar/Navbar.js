import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="nav">
            <input type="checkbox" name="" id='nav__checkbox'/>
            <label htmlFor ="nav__checkbox" className='nav__toggle'>
                <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638686560/porfolio-react/icons8-men%C3%BA-50_iy65p7.png" alt="" className='menu'/>
                <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638686554/porfolio-react/icons8-eliminar-50_hnsgit.png" alt="" className='close'/>
            </label>
            <ul className='nav__menu'>
                <li className='menu__logo'>
                    <a href="#hola" className='logo'>
                        JDAVIDCOR23
                    </a>
                </li>
                <li className='li-nav'><a href="#hola" className='links'>Hola</a></li>
                <li className='li-nav'><a href="#Proyectos" className='links'>Proyectos</a></li>
                <li className='li-nav'><a href="#servicios" className='links'>Servicios</a></li>
                <li><a href="#Contactame" className='links'>Contactame</a></li>
                <li><a href="https://drive.google.com/file/d/1pr5imKJXATOKEVNOtQQZdYufFY-hv7X3/view?usp=sharing" className='links' target="_blank"rel="noreferrer"><button className="curriculum">Descargar currículum</button></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
