import React, {useState} from "react";
import datos from '../productos.json'
import Inicio from "./inicio";
import '../estilos/adminStyle.css'
function Admin(){

    const volver = () => {
        setBarra(barra=<Inicio/>)
        }
    let init = <div className="blockAdmin">   
                <button className="showProd" onClick={ListaProductos}>Lista de productos</button>
                <button className="showProd" >Modificar productos</button>
                <button className="showProd">Lista de ventas</button>
                <button onClick={volver} className="showProd">Volver</button>
            </div>

    let [barra, setBarra] = useState(init)
    let [estadoListProd, setEstadoListProd] = useState([])

    function ListaProductos(){
        setBarra(barra=<div>

            <h1>Lista de productos</h1>
                            <div className="productos">
                    <table className="tablaProductos">
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                {estadoListProd.map( elem => {
                    return(
                        <tr>
                            <td>
                                {elem.prodName}
                            </td>
                            <td>
                                {elem.prodValue}
                            </td>
                            <td>
                                {elem.stock}
                            </td>
                        </tr>
                    )
                })}
                    </table>
                </div>
            </div>
        

        
        )
        setEstadoListProd(estadoListProd=datos)
        
    }
    return(
        <div>
        {barra}
        </div>
        
    )
}

export default Admin