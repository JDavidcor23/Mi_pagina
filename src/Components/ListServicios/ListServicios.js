import React from 'react';
import './ListServicios.css'
const ListServicios = () => {
    return (
        <div className='container-servicios'>
            <h2>Servicios</h2>
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
        </div>
    );
};

export default ListServicios;
