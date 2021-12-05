import React from 'react';
import './LinksFooter.css'
const LinksFooter = () => {
    return (
        <ul className="contanier-ul-footer">
          <li className='logo-footer'>JDAVIDCOR23</li>  
          <li>Hecho por Jorge David Diaz Cordero</li>  
          <ul className='container-logos-footer'>
              <li>
                  <a href='https://twitter.com/JDavidcor23' target="_blank" rel="noreferrer">
                    <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638681054/porfolio-react/icon-twitter_squared_ricmhf.png" alt="twitter"/>
                  </a>
              </li>
              <li>
                  <a href='https://github.com/JDavidcor23?tab=repositories' target="_blank" rel="noreferrer">
                    <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638681058/porfolio-react/Vector_mwsshv.png" alt="github"/>
                  </a>
              </li>
              <li>
                  <a href='https://instagram.com/jdavidcor23?utm_medium=copy_link' target="_blank" rel="noreferrer">
                    <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638681056/porfolio-react/Vector_1_kwxi6f.png" alt="twitter"/>
                  </a>
              </li>
              <li>
                  <a href='https://www.linkedin.com/in/jorge-david-diaz-cordero-66b3a11ba/' target="_blank" rel="noreferrer">
                    <img src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1638491695/freecode-portfolio/icons8-linkedin-30_kpbdds.png" alt="linkeding"/>
                  </a>
              </li>
          </ul>
        </ul>
    );
};

export default LinksFooter;