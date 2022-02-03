import Header from "./Container/Header/Header";
import {React, useState} from 'react'
import ProyectsContain from "./Container/ProyectsContain/ProyectsContain";
import './App.css'
import Servicios from "./Container/Servicios/Servicios";
import Wallpaper from "./Container/Wallpaper/Wallpaper.js";
import Form from "./Container/Form/Form.js";
import Footer from "./Container/Footer/Footer.js";
function App() {
  const [language, setLanguage] = useState(false);
  const changeLanguage =()=>{
    setLanguage(!language)
  }
  return (
    <div className="App">
      <Header language={language} setLanguage={changeLanguage}/>
      <ProyectsContain language={language}/>
      <Servicios language={language}/>
      <Wallpaper/>
      <Form language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default App;
