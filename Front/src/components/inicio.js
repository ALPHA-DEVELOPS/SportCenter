import React, {useState} from 'react';
import '../styles/styleInicio.css'
import Cliente from './cliente';
import Administrador from './administrador';
import Admin from './administrador';


const Inicio = () =>{
    let[estado, setEstado] = useState(<h1>Página de Inicio</h1>);

    function vistaCliente(){
        setEstado(estado = <Cliente />)
            }

    function vistaAdministrador(){
        setEstado(estado = <Administrador />)
    }
    return(
        <div>
            <h1> Página de Inicio </h1>
            <button onClick={vistaCliente} className='buttonInicio'>Cliente</button>
            <button onClick={vistaAdministrador} className='buttonInicio'>Administrador</button>
            {estado}
        </div>
        

    )
}

export default Inicio;