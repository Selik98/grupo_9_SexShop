import React from 'react';
import img1 from '../assets/images/carrusel.png';


function products(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4" >
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">ESTADISTICAS</h5>
                </div>
                <div className="card-body"  >
                    <div className="d-flex flex-row justify-content-around">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 18 +'rem'}} src={img1} alt=" Star Wars - Mandalorian "/>
                        
                    </div>
                    </div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                     <a className="btn btn-primary btn-sm" target="_blank" rel="nofollow" href="/" role='button'>VER ESTADISTICAS</a>
                </div>
            </div>
    )
}

export default products;
