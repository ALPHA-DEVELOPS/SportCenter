import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import datos from "../productos.json"

function Cliente(){
const volver = () => {
setBarra(barra=<Inicio/>)
setInicio(inicio="")
setListaP(ListaP=[])
}

function Inicicializacion() {
    setInicio(inicio=imagen)
    setListaP(ListaP=[])
}

function ListaProductos (){
        setInicio(inicio="")
        setListaP(ListaProductos=datos)

    }
function CarroCompras(){    


}

let init =   
        <div className="blockCliente">
        <button onClick={Inicicializacion} className="buttonCliente">Inicio</button>
        <button onClick={ListaProductos} className="buttonCliente" >Lista de productos</button>
        <button onClick={CarroCompras} className="buttonCliente">Carrito</button>
        <button onClick={volver} className="buttonCliente">Volver</button>
        </div>
let [barra, setBarra] = useState(init)
let imagen = <img src="https://www.osi.es/sites/default/files/images/blog/tecnicomicrosoft.png"></img>
let [inicio, setInicio] = useState(imagen)
let [ListaP, setListaP] = useState([])
let [carrito, SetCarrito] = useState("")

return (
<div>
{barra}
{inicio}
{ListaP.map( elem => { 
return (
    <div>
        {elem.prodName}

    </div>
    )
}
    
    )}
{carrito}
</div>
)
}
export default Cliente