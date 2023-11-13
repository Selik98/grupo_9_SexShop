import React from 'react';
import Card from '../Card';
import LastInDb from '../LastInDb';
import GenresInDb from '../GenresInDb';
import Chart from '../Chart';

function ContentWrapper() {
    return (

        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                {/*<!-- Main Content -->*/}
                <div id="content">
                <Card            
                title= ' Products in Data Base'
                color= 'success'
                cuantity= '79' //EL UNICO QUE SE CAMBIA DE ACA
                icon= 'fa-solid fa-star' 
                />


                    <div className="row">
                        <LastInDb />
                        <GenresInDb />
                    </div>

                    <Chart/>

                </div>
            </div>
        </React.Fragment>    
                
    )
}
export default ContentWrapper;