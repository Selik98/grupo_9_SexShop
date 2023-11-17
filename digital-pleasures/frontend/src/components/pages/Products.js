import React from 'react';
import Card from '../Card';
import Chart from '../Chart';
import LastInDb from '../LastInDb';
import GenresInDb from '../GenresInDb';


function Products(props) {
    return (


        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                <div id="content">
                    <Card
                        type='product'
                    />

                    {props?.products?.count > 0 ?
                    <>
                    <div className="row holder">
                        <LastInDb
                            type='product'
                            content={props.products.productos[props.products.count - 1]} />
                        <GenresInDb />
                    </div>
                    <Chart
                        type='product'
                        content={props.products.productos}
                        />
                        </>
                    : <p> Cargando... </p>}
                </div>
            </div>
        </React.Fragment>

    )
}
export default Products;