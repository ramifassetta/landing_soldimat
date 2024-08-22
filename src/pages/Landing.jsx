import {Contacto} from "../components/Contacto";
import {Galeria} from "../components/Galeria";
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import {Nosotros} from "../components/Nosotros";
import {Productos} from "../components/Productos";


export const Landing = () => {
  return (
    <div className=" ml-0 p-0">
      <Header/>
      <Hero/>
      <Galeria />
      <Nosotros/>
      <Productos />
      <Contacto />
    </div>
  )
}
