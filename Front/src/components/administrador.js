import React, {useState} from "react";
import datos from '../productos.json'
import datosventas from '../ListaVentas.json'
import Inicio from "./inicio";
import '../estilos/adminStyle.css'
function Admin(){

    const volver = () => {
        setBarra(barra=<Inicio/>)
        setListaV(ListaV=[])
        }

    function ventas (){
            setListaV(ventas=datosventas)
           
        }
    let init = <div className="blockAdmin">   
                <button className="showProd" onClick={ListaProductos}>Lista de productos</button>
                <button className="showProd" >Modificar productos</button>
                <button onClick={ventas} className="showProd">Lista de ventas</button>
                <button onClick={volver} className="showProd">Volver</button>
            </div>

    let [barra, setBarra] = useState(init)
    let [estadoListProd, setEstadoListProd] = useState([])
    let [ListaV, setListaV] = useState([])

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
                        

                    </table>
                </div>
            </div>
        

        
        )
        setEstadoListProd(estadoListProd=datos)
        
    }
    return(
        <div>
        {barra}
        {ListaV.map( elem => { 
return (
    <div>
        {elem.idVenta}
    </div>
    )
}
    
    )}
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

        </div>
        
    )
}

export default Admin