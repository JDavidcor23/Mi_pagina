import React from 'react';
import './Proyects.css'

const proyectosLinks =[
    {
        id:1,
        title:"Aplicación de adopción",
        urlCode:"https://github.com/JDavidcor23/Adopcion__Academia-Geek",
        url:"https://jdavidcor23.github.io/Adopcion__Academia-Geek/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174720_pomjjm.png",
        parrafo:"Aplicación de adopción, es una aplicación web para adoptar animales de compañía que no tiene hogar, con este proyecto aprendí Javascript vanilla, funcione async await, peticiones fetch, cómo manejar datos tipo JSON, PUT, DELETE, POT y maquetación profesional."
    },
    {
        id:2,
        title:"Batabit",
        urlCode:"https://github.com/JDavidcor23/Responsive-desing",
        url:"https://jdavidcor23.github.io/Responsive-desing/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174535_eddrut.png",
        parrafo:"Batabit, es una landing page para comprar bitcons. Con este proyecto aprendí Responsive desing en css,maquetación web, SEO y despliegue en GitHub pages."
    },
    {
        id:3,
        title:"React TODOs",
        urlCode:"https://github.com/JDavidcor23/Introduccion_a_Reactjs_Platzi",
        url:"https://jdavidcor23.github.io/Introduccion_a_Reactjs_Platzi/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174812_rqhgps.png",
        parrafo:"React TODOs, este es una aplicación web que te permite agregar tus propios TODOs, borrar, buscar y marcar como completados los TODOs, con este proyecto aprendí react básico, Hooks, localstorage y componentes"
    }
]

const Proyects = () => {
    return (
        <section id="section-proyectos">
            <div className='text-proyectos'>
                <h2>Parece magia, funciona con código.</h2>
                <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</p>
            </div>
            <div className='container-proyectos'>
                {proyectosLinks.map(proyect =>(
                    <div key={proyect.id} className='container_proyect_link'>
                        <img src={proyect.img} alt={proyect.title}/>
                        <div className='container-text-proyect'>
                            <h3>{proyect.title}</h3>
                            <p>{proyect.parrafo}</p>
                            <div className='container-buttons-proyects'>
                                <a href={proyect.url} target="_blank" rel="noreferrer">
                                    <button className='verProyecto'>Ver proyecto completo</button>
                                </a>
                                <a href={proyect.urlCode} target="_blank" rel="noreferrer">
                                    <button className='verCodigo'>Ver código</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://github.com/JDavidcor23?tab=repositories" className='urlRepositorios' target="_blank" rel="noreferrer">
            <button className='verProyectos'>Ver más proyectos <span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638647697/porfolio-react/arrow-right_gssuxn.png" alt="arrow-black"/></span></button>
            </a>
        </section>
    );
};

export default Proyects;
