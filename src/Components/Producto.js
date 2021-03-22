import React from 'react';


const Producto = ({producto , carro, agregarP, productos}) => {

    const {nombre, precio , sku } = producto


    const seleccionP = sku => {

        const producto =productos.filter(producto =>  producto.sku === sku)[0];
        agregarP([
            ...carro,
            producto
        
        ]);

        
    }
        const eliminarP = sku => {
            const productos = carro.filter(producto => producto.sku !== sku);
            agregarP(productos)
        }
    return (
        <div className="producto">

            <h3>{nombre}</h3>
            <p>{precio}</p>

            { productos
            
               ?
               (
                    <button type ="button" onClick={()  => seleccionP(sku)}>Comprar</button>

               ) 

               :

               (
                   <button  type="button"  onClick ={()  => eliminarP(sku)}>Eliminar</button>
               )
            
            
            
            
            
            
            
            }






        </div>
    )






}





export default Producto;