import React from 'react';
import './ListServicios.css'
const ListServicios = ({language}) => {
    return (
        <div className='container-servicios'>
            {language === true ?
            <h2>Services</h2>
            :
            <h2>Servicios</h2>
            }
            {language === true ?
            <ul className='servicios-ul'>
                <li className='title-servicios'>Development</li>
                <li>Websites</li>
                <li>Web applications</li>
                <li>Web layout</li>
                <li>Responsive Desing</li>
                <a href="#Contactame" className='urlRepositorios'>
                <button className='contactame'>Write me<span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638660002/porfolio-react/arrow-right_hrbdsf.png" alt="arrow-black"/></span></button>
            </a>
            </ul>
            :
            <ul className='servicios-ul'>
                <li className='title-servicios'>Desarrollo</li>
                <li>Sitios web</li>
                <li>Aplicaciones web</li>
                <li>Maquetación web</li>
                <li>Responsive Desing</li>
                <a href="#Contactame" className='urlRepositorios'>
                <button className='contactame'>Escribeme<span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638660002/porfolio-react/arrow-right_hrbdsf.png" alt="arrow-black"/></span></button>
            </a>
            </ul>
            }
        </div>
    );
};

export default ListServicios;
