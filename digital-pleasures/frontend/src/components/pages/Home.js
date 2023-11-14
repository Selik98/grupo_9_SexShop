import React from 'react';
import Card from '../Card';
import LastInDb from '../LastInDb';

function Home() {
    return (
            <div id='content'>
            <div className='homeBase'>
            <Card
                title = 'Users in Data Base'
                color = 'primary'
                cuantity = '21'
                icon = 'fa-solid fa-user'
            />
            <Card            
                title= ' Products in Data Base'
                color= 'success'
                cuantity= '79'
                icon= 'fa-solid fa-star' 
            />
            </div>            

            <div className="row holder">
                        <LastInDb
                        type = 'user' />
                        <LastInDb
                        type = 'product' />
                    </div>

            </div>
    )
}
export default Home;