import React from 'react'
import Input from './Input'
import { Items } from './Item'
import NavBar from './NavBar/NavBar'
import Titulo from './Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartwidget from './CartWidget/Cartwidget'


function ComponenteContenedor() {
    const estilo = { backgroundColor: 'blue'}
    const tit = 'Sheila'
    const subTitulo= 'este es el subtitutlo'

    function saludar() {
        console.log('hola')
      }

    return (
        <div>
            <NavBar />
            <Input saludar={saludar}/>
            <Titulo tit= {tit} subTitulo={subTitulo} />
            <Titulo tit='Soy titulo' subTitulo= 'soy subtitulo'/>
            <Items />
            
            
        </div>
    )
}


export default ComponenteContenedor