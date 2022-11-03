import React, {useState} from "react";
import datos from '../productos.json'
import ventas from '../ListaVentas.json'
import '../estilos/adminStyle.css'
import NewProduct from './NuevoProducto'
import Inicio from './inicio'

function Admin(){

    let [estadoAdmin, setEstadoAdmin] = useState("")
    let [estadoListProd, setEstadoListProd] = useState([])
    let [estadoListVentas, setestadoListVentas] = useState([])

    function ListaProductos(){
        setEstadoAdmin(estadoAdmin=
        <div>

            <h1>Lista de productos</h1>

        </div>
        )
        setEstadoListProd(estadoListProd=datos)
        setestadoListVentas(estadoListProd=[])
        
    }
    function ModificarProductos(){
        setEstadoAdmin(estadoAdmin=<div>
            <NewProduct/>
        </div>)
        setEstadoListProd(estadoListProd=[])
        setestadoListVentas(estadoListProd=[])
        
    }
    function ListarVentas(){
        setEstadoAdmin(estadoAdmin=<div>

            <h1>Lista de las ventas</h1>

        </div>)
        setestadoListVentas(estadoListProd=ventas)
        setEstadoListProd(estadoListProd=[])
        
    }


    return(
        <div>
            <h1>Administrador</h1>
            <div>

                <button className="showProd" onClick={ListaProductos}>Lista de productos</button>
                <button className="showProd" onClick={ModificarProductos}>Modificar</button>
                <button className="showProd" onClick={ListarVentas}>Lista de ventas</button>

                {estadoAdmin}
<table>

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
<table>

                {estadoListVentas.map( elmVentas => {
                    return(
                        
                        <tr>
                            <td>
                                {elmVentas.Fecha}

                            </td>
                            <td>
                                ${elmVentas.idVenta}

                            </td>
                            <td>
                                {elmVentas.valor}
                            </td>
                        </tr>


)
})
}
</table>
            </div>
        </div>
    )
}

export default Admin