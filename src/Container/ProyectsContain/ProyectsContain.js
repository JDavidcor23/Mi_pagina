import React from 'react';
import Proyects from '../../Components/Proyects/Proyects';

const ProyectsContain = ({language}) => {
    return (
        <section id='Proyectos'>
            <Proyects language={language}/>
        </section>
    );
};

export default ProyectsContain;