import React from "react";
import "./Proyects.css";
import { proyects, tecnologies } from "../../helpers/proyects";
const Proyects = ({ language }) => {
  const getTecnologies = (number, images) => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(
        <img
          src={images[i]}
          alt="stars"
          className="tecnologies"
          key={`star__${i}`}
        />
      );
    }
    return stars;
  };
  return (
    <>
      {language === true ? (
        <section id="section-proyectos">
          <div className="text-proyectos">
            <h2>It looks like magic, it works with code.</h2>
            <p>
              Throughout my career as a Frontend, I have had the privilege of
              working on challenging and amazing projects.
            </p>
            <h3>Technologies</h3>
            <div className="tecnologies_container">
              {tecnologies.map((tec) => (
                <div key={tec.name}>
                  <img src={tec.img} alt="" />
                  <p>{tec.name}</p>
                </div>
              ))}
            </div>
          </div>
          {proyects.map((pro) => (
            <div className="div_proyectos" key={pro.title}>
              <h2>{pro.title}</h2>
              <img src={pro.img} alt={pro.title} className="proyect_img" />
              <div>
                {getTecnologies(pro.tecnologies.length, pro.tecnologies)}
              </div>
              <p>{pro.description}</p>
              <a href={`${pro.urlCode}`} target="_black">
                <button>SEE CODE</button>
              </a>
              <a href={`${pro.url}`} target="_black">
                <button>GO TO THE COMPLETE PROJECT</button>
              </a>
            </div>
          ))}
        </section>
      ) : (
        <section id="section-proyectos">
          <div className="text-proyectos">
            <h2>Parece magia, funciona con código.</h2>
            <p>
              A lo largo de mi carrera como Frontend, he tenido el privilegio de
              trabajar en proyectos retadores e increíbles.
            </p>
            <h3>Tecnologias</h3>
            <div className="tecnologies_container">
              {tecnologies.map((tec) => (
                <div key={tec.name}>
                  <img src={tec.img} alt="" />
                  <p>{tec.name}</p>
                </div>
              ))}
            </div>
          </div>
          {proyects.map((pro) => (
            <div className="div_proyectos" key={pro.title}>
              <h2>{pro.title}</h2>
              <img src={pro.img} alt={pro.title} className="proyect_img" />
              <div>
                {getTecnologies(pro.tecnologies.length, pro.tecnologies)}
              </div>
              <p>{pro.descricion}</p>
              <a href={`${pro.urlCode}`} target="_black">
                <button>VER CODIGO</button>
              </a>
              <a href={`${pro.url}`} target="_black">
                <button>IR AL PROYECTO COMPLETO</button>
              </a>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Proyects;
