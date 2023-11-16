import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';



function Card(props) {
<<<<<<< HEAD

    let info

    if (props.type = 'user') {
        let [user, setUser] = useState({})

        useEffect(() => {
            (
                async function () {
                    try {
                        let response = await fetch('/api/users');
                        let data = await response.json();
                        console.log(data)
                        setUser(data)
                    } catch (error) {
                        console.log(error)
                    }
                }
            )()
        }, []);
        info = user
    }

    if (props.type = 'products') {
        let [products, setProducts] = useState({})

        useEffect(() => {
            (
                async function () {
                    try {
                        let response = await fetch('/api/products');
                        let data = await response.json();
                        console.log(data)
                        setProducts(data)
                    } catch (error) {
                        console.log(error)
                    }
                }
            )()
        }, []);
        info = products
    }



    let cardComponents = {
        title: props.title,
        color: props.color,
        cuantity: props.count,
=======
    
    let cardComponents = {
        title: props.title,
        color: props.description,
        cuantity: props.cuantity,
>>>>>>> c89ddd54730146191d10d4be5492473e2c17027f
        icon: props.icon
    }



    return (

        <div className="row">

            <SmallCard {...cardComponents} />

        </div>
    )
}

export default Card;