import React from 'react';
import ListServicios from '../../Components/ListServicios/ListServicios';
import './Servicios.css'

const Servicios = ({language}) => {
    return (
        <section id="servicios">
            <ListServicios language={language}/>
        </section>
    );
};

export default Servicios;