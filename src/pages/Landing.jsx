import {Contacto} from "../components/Contacto";
import {Galeria} from "../components/Galeria";
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import { Mapa } from "../components/Mapa";
import {Nosotros} from "../components/Nosotros";
import { Productos } from "../components/Productos";
import {Servicios} from "../components/Servicios";
import { WppButton } from "../components/WppButton";


export const Landing = () => {
  return (
    <div className=" ml-0 p-0">
      <Header/>
      <Hero/>
      <Nosotros/>
      <Galeria />
      <Productos/>
      <Servicios />
      <Mapa />
      <Contacto />
      <WppButton />
    </div>
  )
}
