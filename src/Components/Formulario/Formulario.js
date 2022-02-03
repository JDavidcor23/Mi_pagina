import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Formulario.css'
const Formulario = ({language}) => {
  const [state, handleSubmit] = useForm("myyogqrl");
  if (state.succeeded) {
    return <div className='containerEnviado'>
            <p className='mensajeEnviado'>Mensaje enviado</p>;
          </div>
  }
  return (
    <>
    {language === true ?
   <form onSubmit={handleSubmit}>
    <h2>Contact</h2>
    <p>If you are interested in working with me on your next project, please do not hesitate to contact me.</p>
   <input
     id="name"
     type="name" 
     name="name"
     placeholder='Full name'
   />
   <ValidationError 
     prefix="Name" 
     field="name"
     errors={state.errors}
   />
   <input
     id="email"
     type="email" 
     name="email"
     placeholder='Email'
   />
   <ValidationError 
     prefix="Email" 
     field="email"
     errors={state.errors}
   />
   <textarea
     id="message"
     name="message"
     placeholder='Message'
   />
   <ValidationError 
     prefix="Message" 
     field="message"
     errors={state.errors}
   />
   <button type="submit" disabled={state.submitting} className='enviar'>
     Enviar
   </button>
  </form>
    :
   <form onSubmit={handleSubmit}>
    <h2>Contacto</h2>
    <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</p>
   <input
     id="name"
     type="name" 
     name="name"
     placeholder='Nombre completo'
   />
   <ValidationError 
     prefix="Name" 
     field="name"
     errors={state.errors}
   />
   <input
     id="email"
     type="email" 
     name="email"
     placeholder='Correo'
   />
   <ValidationError 
     prefix="Email" 
     field="email"
     errors={state.errors}
   />
   <textarea
     id="message"
     name="message"
     placeholder='Mensaje'
   />
   <ValidationError 
     prefix="Message" 
     field="message"
     errors={state.errors}
   />
   <button type="submit" disabled={state.submitting} className='enviar'>
     Enviar
   </button>
  </form>

    }
    </>
  );
};

export default Formulario;