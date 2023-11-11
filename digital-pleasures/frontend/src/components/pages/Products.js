import React from 'react';
import ContentRowTop from '../ContentRowTop';
import Card from '../Card';

function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                <Card            
                title= ' Products in Data Base'
                color= 'success'
                cuantity= '79'
                icon= 'fa-solid fa-star' 
            />
                <div id="content">
                    <ContentRowTop />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;