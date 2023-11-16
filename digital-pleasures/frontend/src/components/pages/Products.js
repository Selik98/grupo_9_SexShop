import React from 'react';
import Card from '../Card';
import Chart from '../Chart';

function Products() {
    return (

        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                <div id="content">
                <Card            
                title= ' Products in Data Base'
                color= 'success'
                cuantity= '79' //EL UNICO QUE SE CAMBIA DE ACA
                icon= 'fa-solid fa-star' 
                />


                    <div className="row holder">

                    </div>
                    <Chart/>

                </div>
            </div>
        </React.Fragment>    
                
    )
}
export default Products;