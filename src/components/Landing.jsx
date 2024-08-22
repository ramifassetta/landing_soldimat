import {Contacto} from "./landing_components/Contacto";
import {Galeria} from "./landing_components/Galeria";
import {Header} from "./landing_components/Header";
import {Hero} from "./landing_components/Hero";
import {Nosotros} from "./landing_components/Nosotros";
import {Productos} from "./landing_components/Productos";


export const Landing = () => {
  return (
    <div >
      <Header/>
      <Hero/>
      <Galeria />
      <Nosotros/>
      <Productos />
      <Contacto />
    </div>
  )
}
