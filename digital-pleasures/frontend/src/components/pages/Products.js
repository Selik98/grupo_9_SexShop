import React from 'react';
import Card from '../Card';
import LastInDb from '../LastInDb';
import GenresInDb from '../GenresInDb';
/* import Chart from '../Chart'; */
import LineCharts from '../LineCharts';

function Products() {
    return (

        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <Card
                        title=' Products in Data Base'
                        color='success'
                        cuantity='79' //EL UNICO QUE SE CAMBIA DE ACA
                        icon='fa-solid fa-star'
                    />


                    <div className="row holder">
                        <LastInDb
                            type='product' />
                        <GenresInDb />
                        <LineCharts />
                    </div>

                    {/* <Chart/> */}

                </div>
            </div>
        </React.Fragment>

    )
}
export default Products;