import React from 'react';
import Producto from './Producto';



const Carro = ({carro, agregarP}) => (



    <div className="carro">

        <h2>Carro de compra</h2>

     { carro.leght ===0
     ?<p>No hay productos en el carro</p>
     : carro.map( producto =>(
         <Producto>
             key = {producto.sku}
             producto ={producto}
             carro ={carro}
             agregarP ={agregarP}

         </Producto>
     ))

     }

        
    
</div>

);


export default Carro;