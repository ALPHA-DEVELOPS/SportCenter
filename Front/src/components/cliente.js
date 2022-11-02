import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";

function Cliente(){
const volver = () => {
setBarra(barra=<Inicio/>)
setInicio(inicio="")
}

function Inicicializacion() {
    setInicio(inicio=imagen)
}

let init =   
        <div className="blockCliente">
        <button onClick={Inicicializacion} className="buttonCliente">Inicio</button>
        <button className="buttonCliente" >Lista de productos</button>
        <button className="buttonCliente">Carrito</button>
        <button onClick={volver} className="buttonCliente">Volver</button>
        </div>
let [barra, setBarra] = useState(init)
let imagen = <img src="https://www.osi.es/sites/default/files/images/blog/tecnicomicrosoft.png"></img>
let [inicio, setInicio] = useState(imagen)
let [ListaProductos, setListaProductos] = useState(imagen)
return (
<div>
{barra}
{inicio}
</div>
)
}
export default Cliente