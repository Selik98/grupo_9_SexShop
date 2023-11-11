import React from 'react';
import ContentRowTop from '../ContentRowTop';
import Card from '../Card';
function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                {/*<!-- Main Content -->*/}
                <div id="content">
                <Card
                title = 'Users in Data Base'
                color = 'primary'
                cuantity = '21'
                icon = 'fa-solid fa-user'
            />

                    </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;