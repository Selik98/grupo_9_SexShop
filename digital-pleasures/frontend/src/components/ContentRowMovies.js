import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let usersInDB = {
    title: 'Users in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-solid fa-user'
}
/* <!-- Total awards --> */

let productsInDB = {
    title:' Products in Data Base', 
    color:'success', 
    cuantity: '79',
    icon:'fa-solid fa-star'
}

/* <!-- Actors quantity --> */

let categorias = {
    title:'categorias' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [usersInDB, productsInDB, categorias];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;