import React from 'react';
import SmallCard from './SmallCard';


function Card(props) {
    
    let cardComponents = {
        title: props.title,
        color: props.color,
        cuantity: props.cuantity,
        icon: props.icon
    }

    return (

        <div className="row">

            <SmallCard {...cardComponents} />

        </div>
    )
}

export default Card;