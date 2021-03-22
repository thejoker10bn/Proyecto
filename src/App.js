import React, { Fragment, useState } from 'react';
import Footer from './Components/Footer';
import Producto from './Components/Producto';
import Header from './Components/Header';
import Carro from './Components/Carro';
import Barra from './Components/Barra';
import './App.css'

function App() {

  const [productos, guardarP] = useState ([

    { id: 1001, nombre: 'Pc gaming msi rt 3080', precio: 3090},
    {id: 1002, nombre: 'Pc gaming msi rt 3070', precio: 2050},
    {id: 1003, nombre: 'Pc gaming msi rt 3060', precio: 2010},
    {id: 1004, nombre: 'Motherboard asus m790g', precio: 570},
    {id: 1005, nombre: 'teclado msi gratx', precio: 390},
    {id: 1006, nombre: 'Mouse logig', precio: 143},
    {id: 1007, nombre: 'Beats solo 3', precio: 902},
    {id: 1008, nombre: 'Monitor lg ultrawide 50', precio: 1020},
    {id: 1009, nombre: 'Case ultracool rgb', precio: 490},
    {id: 1010, nombre: 'Camara wbe art', precio: 167},
    {id: 1011, nombre: 'Disco ssd samsung black', precio: 320},
    {id: 1012, nombre: 'Fuente de poder aorus', precio: 650},
    {id: 1013, nombre: 'intel 10th 9i', precio: 1000},
    {id: 1014, nombre: 'Silla dxracer ', precio: 875},




  ]);



  const [carro, agregarP] = useState ([]);


  const fecha = new Date ().getFullYear();

   return (
    
    <Fragment>

      <Header 
       titulo='Tech Store'
       />


       <Barra/>

        <h1>Productos Exclusivos</h1>


        {productos.map(producto =>(
          <Producto>
                  key ={producto.sku}
                  producto ={producto}
                  productos ={productos}
                  carro = [carro]
                  agregarP = {agregarP}


          </Producto>
         
        ))

        }

        <carro
          carro ={Carro}
          agregarP ={agregarP}
          />



      
      
      
      
      
      <Footer
        fecha={fecha}
      
      />
    


    </Fragment>


    

  );
}

export default App;
