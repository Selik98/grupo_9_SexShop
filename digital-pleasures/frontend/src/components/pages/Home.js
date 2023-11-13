import React from 'react';

import Card from '../Card';
function Home() {
    return (
            <>
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
            </>
    )
}
export default Home;