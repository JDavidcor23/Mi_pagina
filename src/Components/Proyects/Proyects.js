import React from 'react';
import './Proyects.css'

const proyectosLinks =[
      {
        id:1,
        title:"Amazonas",
        urlCode:"https://github.com/JDavidcor23/amazonas",
        url:"https://as-74bd2.web.app",
        img:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643308739/pvipoads96rq9qklinnn.png",
        parrafo:"Amazonas es una pagina inspirada en Amazon, que cuenta con varios artículos para que compres, puedes loguearte con Google,  Facebook o con tu cuenta de correo, también puedes filtrar, buscar añadir al carrito, vender, eliminar tus productos y editarlos tecnologías: Redux, React , Firebase, StyledComponents, Bootstrap, Formik, Yup"
    },
     {
        id:2,
        title:"Block Master",
        urlCode:"https://github.com/JDavidcor23/Block_master",
        url:"https://block-master-two.vercel.app",
        img:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1641270199/lfaw0g4q18ggb5frl2n6.png",
        parrafo:"Block Master, es una aplicación web para agregar películas como favoritas, filtrar, mostrar las más valoradas. Con este proyecto aprendí mucho más de los hooks en React, styled components y peticiones"
    },
    {
        id:3,
        title:"Aplicación de adopción",
        urlCode:"https://github.com/JDavidcor23/Adopcion__Academia-Geek",
        url:"https://jdavidcor23.github.io/Adopcion__Academia-Geek/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174720_pomjjm.png",
        parrafo:"Aplicación de adopción, es una aplicación web para adoptar animales de compañía que no tiene hogar, con este proyecto aprendí Javascript vanilla, funcione async await, peticiones fetch, cómo manejar datos tipo JSON, PUT, DELETE, POT y maquetación profesional."
    },
    {
        id:4,
        title:"Batabit",
        urlCode:"https://github.com/JDavidcor23/Responsive-desing",
        url:"https://jdavidcor23.github.io/Responsive-desing/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174535_eddrut.png",
        parrafo:"Batabit, es una landing page para comprar bitcoins. Con este proyecto aprendí Responsive design en css,maquetación web, SEO y despliegue en GitHub pages."
    },
    {
        id:5,
        title:"React TODOs",
        urlCode:"https://github.com/JDavidcor23/Introduccion_a_Reactjs_Platzi",
        url:"https://jdavidcor23.github.io/Introduccion_a_Reactjs_Platzi/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174812_rqhgps.png",
        parrafo:"React TODOs, este es una aplicación web que te permite agregar tus propios TODOs, borrar, buscar y marcar como completados los TODOs, con este proyecto aprendí react básico, Hooks, localstorage y componentes"
    }
]
const proyectsLinks=[
      {
        id:1,
        title:"Amazonas",
        urlCode:"https://github.com/JDavidcor23/amazonas",
        url:"https://as-74bd2.web.app",
        img:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643308739/pvipoads96rq9qklinnn.png",
        parrafo:"Amazonas is a website inspired by Amazon, which has several items for you to buy, you can log in with Google, Facebook or your email account, you can also filter, search, add to cart, sell, delete your products and edit them. Technologies: Redux, React, Firebase, StyledComponents, Bootstrap, Formik, Yup."
    },
     {
        id:2,
        title:"Block Master",
        urlCode:"https://github.com/JDavidcor23/Block_master",
        url:"https://block-master-two.vercel.app",
        img:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1641270199/lfaw0g4q18ggb5frl2n6.png",
        parrafo:"Block Master, is a web application to add movies as favorites, filter, show top rated movies. With this project I learned much more about React hooks, styled components and requests. Technologies: React, StyledComponents, Bootstrap."
    },
    {
        id:3,
        title:"Aplicación de adopción",
        urlCode:"https://github.com/JDavidcor23/Adopcion__Academia-Geek",
        url:"https://jdavidcor23.github.io/Adopcion__Academia-Geek/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174720_pomjjm.png",
        parrafo:"Adoption application, is a web application to adopt homeless pets, with this project I learned vanilla Javascript, async await, fetch requests, how to handle JSON data, PUT, DELETE, POT and professional layout. Technologies: Javascript, CSS3, HTML5."
    },
    {
        id:4,
        title:"Batabit",
        urlCode:"https://github.com/JDavidcor23/Responsive-desing",
        url:"https://jdavidcor23.github.io/Responsive-desing/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174535_eddrut.png",
        parrafo:"Batabit, is a landing page to buy bitcoins. With this project I learned Responsive design in css, web layout, SEO and deployment in GitHub pages. Technologies: HTML5 ,CSS3."
    },
    {
        id:5,
        title:"React TODOs",
        urlCode:"https://github.com/JDavidcor23/Introduccion_a_Reactjs_Platzi",
        url:"https://jdavidcor23.github.io/Introduccion_a_Reactjs_Platzi/",
        img:"https://res.cloudinary.com/dbtk64lp4/image/upload/v1638658170/porfolio-react/Captura_de_pantalla_2021-12-04_174812_rqhgps.png",
        parrafo:"React TODOs, this is a web application that allows you to add your own TODOs, delete, search and mark as completed TODOs, with this project I learned basic react, Hooks, localstorage and components. Technologies:  React, CSS3."
    }
]

const Proyects = ({language}) => {
    return (
        <section id="section-proyectos">
            {language === true ? 
            <div className='text-proyectos'>
                <h2>It looks like magic, it works with code.</h2>
                <p>Throughout my career as a Frontend, I have had the privilege of working on challenging and amazing projects.</p>
            </div>
            :
            <div className='text-proyectos'>
                <h2>Parece magia, funciona con código.</h2>
                <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</p>
            </div>
            }
            {language === true ?
            <div className='container-proyectos'>
                {proyectsLinks.map(proyect =>(
                    <div key={proyect.id} className='container_proyect_link'>
                        <img src={proyect.img} alt={proyect.title}/>
                        <div className='container-text-proyect'>
                            <h3>{proyect.title}</h3>
                            <p>{proyect.parrafo}</p>
                            <div className='container-buttons-proyects'>
                                <a href={proyect.url} target="_blank" rel="noreferrer">
                                    <button className='verProyecto'>See complete project</button>
                                </a>
                                <a href={proyect.urlCode} target="_blank" rel="noreferrer">
                                    <button className='verCodigo'>See code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            :
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
            }
            <a href="https://github.com/JDavidcor23?tab=repositories" className='urlRepositorios' target="_blank" rel="noreferrer">
            {language === true ?
            <button className='verProyectos'>See more projects <span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638647697/porfolio-react/arrow-right_gssuxn.png" alt="arrow-black"/></span></button>
            :
            <button className='verProyectos'>Ver más proyectos <span><img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638647697/porfolio-react/arrow-right_gssuxn.png" alt="arrow-black"/></span></button>
            }
            </a>
        </section>
    );
};

export default Proyects;
