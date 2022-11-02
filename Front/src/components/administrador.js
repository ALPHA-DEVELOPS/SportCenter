import React, {useState} from "react";
import datos from '../productos.json'
import '../estilos/adminStyle.css'
function Admin(){

    let [estadoAdmin, setEstadoAdmin] = useState("")
    let [estadoListProd, setEstadoListProd] = useState([])

    function ListaProductos(){
        setEstadoAdmin(estadoAdmin=<div>

            <h1>Lista de productos</h1>
        </div>
        )
        setEstadoListProd(estadoListProd=datos)
        
    }
    return(
        <div>
            <h1>Administrador</h1>
            <div>
                <button className="showProd" onClick={ListaProductos}>Lista de productos</button>
                {estadoAdmin}
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
        </div>
    )
}

export default Admin