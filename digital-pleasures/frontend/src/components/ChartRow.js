import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.producto}</td>
                    <td>{props.precio}</td>
                    <td>{props.category}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.category}</td>
                </tr>
            )
    }
    
        

export default ChartRow;