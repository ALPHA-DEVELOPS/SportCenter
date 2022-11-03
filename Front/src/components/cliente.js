import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import datos from "../productos.json"
import carrito from '../carrito'

function Cliente(){
const volver = () => {
setBarra(barra=<Inicio/>)
setInicio(inicio="")
setListaP(ListaP=[])
setEstCarrito(estCarrito=[])

}
let [estCarrito,setEstCarrito] = useState([])

function Inicicializacion() {
    setInicio(inicio=imagen)
    setListaP(ListaP=[])
    setEstCarrito(estCarrito=[])
}
function Carrito(){
    setInicio(inicio="")
    setEstCarrito(estCarrito=carrito)
    
    setListaP(ListaProductos=[])
}
function ListaProductos (){

        setInicio(inicio="")
        setListaP(ListaProductos=datos)
        
        setEstCarrito(estCarrito=[])

    }

let init =   
        <div className="blockCliente">
        <button onClick={Inicicializacion} className="buttonCliente">Inicio</button>
        <button onClick={ListaProductos} className="buttonCliente" >Lista de productos</button>
        <button className="buttonCliente" onClick={Carrito}>Carrito</button>
        <button onClick={volver} className="buttonCliente">Volver</button>
        </div>
let [barra, setBarra] = useState(init)
let imagen = <img src="https://www.osi.es/sites/default/files/images/blog/tecnicomicrosoft.png"></img>
let [inicio, setInicio] = useState(imagen)
let [ListaP, setListaP] = useState([])

return (
<div>
{barra}
{inicio}

<table>

{ListaP.map( ClientProd => { 
    
    return (

        <tr>
            <td>
                {ClientProd.prodName}

            </td>
            <td>
                {ClientProd.prodValue}

            </td>
            <td>
                {ClientProd.stock}
            </td>
            <td className="prefer">
                ❤
            </td>
        </tr>
    )
}

)}

{estCarrito.map( prodCarrito => { 
    
    return (

        <tr>
            <td>
                {prodCarrito.art}

            </td>
            <td>
                ${prodCarrito.valor}

            </td>

        </tr>
    )
}

)}
</table>
{/* {carrito} */}
</div>
)
}
export default Cliente