import React from 'react'

const title = 'grid justify-items-center content-center text-3xl h-60 m-20 bg-red-300 w-full';
const search ='grid justify-items-center content-center text-3xl h-20 bg-white';
const Header = () => {
    return (
        <>
            <section className={title}>
            <img className='h-80' src='src/img/logoserena.png' alt='logo-empresa'/>
            <h1 >Recetario La Serena</h1>
            </section>
            <section className={search}>Search</section>


        </>
    )
}

export default Header