import React from "react";
import "./Navbar.css";
const Navbar = ({ language, setLanguage }) => {
  let img = ""
  let otherFlag = ""
  if (language) {
    img ="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643899665/vrnwjextes3yqq1sochv.jpg"
    otherFlag ="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643899660/kwdui0tfevefjfrodptp.png"
    
  } else {
    img="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643899660/kwdui0tfevefjfrodptp.png"
    otherFlag ="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643899665/vrnwjextes3yqq1sochv.jpg"

  }

  const changeFlag = () => {
    setLanguage();
  };

  return (
    <nav className="nav">
      <input type="checkbox" name="" id="nav__checkbox" />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <img
          src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638686560/porfolio-react/icons8-men%C3%BA-50_iy65p7.png"
          alt=""
          className="menu"
        />
        <img
          src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638686554/porfolio-react/icons8-eliminar-50_hnsgit.png"
          alt=""
          className="close"
        />
      </label>
      <ul className="nav__menu">
        <li className="menu__logo" style={{ display: "flex" }}>
          <a href="#hola" className="logo">
            JDAVIDCOR23
          </a>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                padding: "0",
                margin: "0 20px",
                background: "none",
                color: "#0fd3d1",
              }}
            >
              <img src={img} alt="" width="50px" />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#hola" onClick={changeFlag}>
                <img
                  src={otherFlag}
                  alt=""
                  width="50px"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="li-nav">
          {language === true ? (
            <a href="#hola" className="links">
              Hello
            </a>
          ) : (
            <a href="#hola" className="links">
              Hola
            </a>
          )}
        </li>
        <li className="li-nav">
          {language === true ? (
            <a href="#Proyectos" className="links">
              Proyects
            </a>
          ) : (
            <a href="#Proyectos" className="links">
              Proyectos
            </a>
          )}
        </li>
        <li className="li-nav">
          {language === true ? (
            <a href="#servicios" className="links">
              Services
            </a>
          ) : (
            <a href="#servicios" className="links">
              Servicios
            </a>
          )}
        </li>
        <li>
          {language === true ? (
            <a href="#Contactame" className="links">
              Contact me
            </a>
          ) : (
            <a href="#Contactame" className="links">
              Contactame
            </a>
          )}
        </li>
        <li>
          {language === true ? (
            <a
              href="https://drive.google.com/file/d/1t74c_zSZerorxGNaWpSomVfyLPFKqKqx/view?usp=sharing"
              className="links"
              target="_blank"
              rel="noreferrer"
            >
              <button className="curriculum">Download curriculum</button>
            </a>
          ) : (
            <a
              href="https://drive.google.com/file/d/1L7whyBnagGI06DmIMJEDV_XzQFqviMU8/view?usp=sharing"
              className="links"
              target="_blank"
              rel="noreferrer"
            >
              <button className="curriculum">Descargar currículum</button>
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
