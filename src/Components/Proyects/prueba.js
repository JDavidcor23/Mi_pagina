/*<section id="section-proyectos">
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
</section>*/