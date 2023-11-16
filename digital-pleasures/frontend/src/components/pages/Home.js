import React from 'react';
import Card from '../Card';
import LastInDb from '../LastInDb';

function Home() {
    return (
            <div id='content'>
            <div className='homeBase'>
                
            {/* <Link class="width: 100" to='/users' exact> */}
            <Card // Panel de detalle de último usuario creado.(informacion del usuario, compras del usuario)
                 title = 'Users in Data Base'
                color = 'primary'
                cuantity = '21'
                icon = 'fa-solid fa-user'
            />
            {/* </Link> */}
            {/* <Link class="width: 50" to='/products' exact> */}
            <Card  //Panel con el listado de productos. (informacion del total de productos vendidos,total de ventas)         
                title= ' Products in Data Base'
                color= 'success'
                cuantity= '79'
                icon= 'fa-solid fa-star' 
            />
            {/* </Link> */}
            </div>            

            { <div className="row holder">
                        <LastInDb
                        type = 'user' />
                        <LastInDb
                        type = 'product' />
                    </div> }

            </div>
    )
}
export default Home;