/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Iam.css'

const imgProfile = "https://res.cloudinary.com/dbtk64lp4/image/upload/v1638657631/porfolio-react/linkedin_lakpnn.png" 

const arrow = "https://res.cloudinary.com/dbtk64lp4/image/upload/v1638577468/porfolio-react/arrow-down_bw8vdt.png"

const Iam = ({language}) => {
    return (
        <section id="hola">
            {language === true ?
            <div className='nameDescription'>
                <h2>Hello everyone!</h2>
                <h1>I am <span>Jorge David Diaz Cordero</span></h1>
                <p>Developer who loves to implement designs that inspire and attract people</p>
                <img src={arrow} className='arrow'/>
            </div>
            :
            <div className='nameDescription'>
                <h2>¡Hola a todos!</h2>
                <h1>Soy <span>Jorge David Diaz Cordero</span></h1>
                <p>Developer que le encanta implementar diseños que 
                inspiran y atraen a las personas.</p>
                <img src={arrow} className='arrow'/>
            </div>

            }
            <img src={imgProfile} className='imgProfile'/>
        </section>
    );
};

export default Iam;