import React from 'react';
import Formulario from '../../Components/Formulario/Formulario';
import './Form.css'
const Form = ({language}) => {
    return (
        <section id="Contactame" className='.contact'>
            <Formulario language={language}/>
        </section>
    );
};

export default Form;