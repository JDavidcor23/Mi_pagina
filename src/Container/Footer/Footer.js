import React from 'react';
import './Footer.css'
import LinksFooter from '../../Components/LinksFooter/LinksFooter';

const Footer = ({language}) => {
    return (
        <footer>
            <LinksFooter language={language}/>
        </footer>
    );
};

export default Footer;