import React from 'react'
import Favoritos from './Favoritos';
import Products from './Products';


const title = 'grid justify-items-center content-center gap-y-10 text-3xl h-80 bg-red-600 text-white';
const search ='grid justify-items-center content-center text-3xl h-20 bg-white mt-20 mb-10';
const Header = () => {
    return (
        <>
            <section className={title}>
                <img className='h-56' src='src/img/logoserena.png' alt='logo-empresa'/>
                <h1 >Recetario La Serena</h1>
            </section>
            <Favoritos/>
            <section className={search}>
                <input className='border-4 border-red-600 w-42 text-center' placeholder='Buscar' type="text"/>
            </section>
            <Products/>

        </>
    )
}

export default Header