import Header from "./Container/Header/Header";
import ProyectsContain from "./Container/ProyectsContain/ProyectsContain";
import './App.css'
import Servicios from "./Container/Servicios/Servicios";
import Wallpaper from "./Container/Wallpaper/Wallpaper.js";
import Form from "./Container/Form/Form.js";
import Footer from "./Container/Footer/Footer.js";
function App() {
  return (
    <div className="App">
      <Header/>
      <ProyectsContain/>
      <Servicios/>
      <Wallpaper/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
