import React from 'react';
import Card from '../Card';
import LastInDb from '../LastInDb';
import TypeinDB from '../TypeinDB';
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
                        title='Users in Data Base'
                        color='primary'
                        cuantity='21'
                        icon='fa-solid fa-user'
                    />


                    <div className="row">
                        <LastInDb />
                        <TypeinDB />
                    </div>

                    <Chart/>

                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;