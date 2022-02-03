import React from 'react';
import Iam from '../../Components/Iam/Iam';
import Navbar from '../../Components/Navbar/Navbar';

const Header = ({language, setLanguage}) => {
    return (
        <div>
            <Navbar language={language} setLanguage={setLanguage}/>
            <Iam language={language}/>
        </div>
    );
};

export default Header;