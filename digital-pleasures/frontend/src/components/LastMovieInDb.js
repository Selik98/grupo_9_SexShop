import React from 'react';
import img1 from '../assets/images/conjuntobrenda.webp';
import img2 from '../assets/images/dizfrazconeja.png';
import img3 from '../assets/images/vibradorinteractivo.webp';
import img4 from '../assets/images/juguete3.png';
import img5 from '../assets/images/conjuntobrenda.webp';


function LastMovieInDb(){
    return(
        <div /* className="col-lg-6 mb-4" */>
            <div /* className="card shadow mb-4" */>
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">PRODUCTOS</h5>
                </div>
                <div /* className="card-body" */  >
                    <div className="d-flex flex-row justify-content-around">
                        <div className="card-body text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 18 +'rem'}} src={img1} alt=" Star Wars - Mandalorian "/>
                        <a className="btn btn-primary btn-sm" target="_blank" rel="nofollow" href="/" role='button'>Ver detalle producto</a>
                        </div>
                        <div className="card-body text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={img2} alt=" Star Wars - Mandalorian "/>
                        <a className="btn btn-primary btn-sm" target="_blank" rel="nofollow" href="/" role='button'>Ver detalle producto</a>
                        </div>
                        <div className="card-body text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 18 +'rem'}} src={img3} alt=" Star Wars - Mandalorian "/>
                        <a className="btn btn-primary btn-sm" target="_blank" rel="nofollow" href="/" role='button'>Ver detalle producto</a>
                        </div>
                        <div className="card-body text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={img4} alt=" Star Wars - Mandalorian "/>
                        <a className="btn btn-primary btn-sm" target="_blank" rel="nofollow" href="/" role='button'>Ver detalle producto</a>
                        </div>
                        <div className="card-body text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 18 +'rem'}} src={img5} alt=" Star Wars - Mandalorian "/>
                        <a className="btn btn-primary btn-sm" target="_blank" rel="nofollow" href="/" role='button'>Ver detalle producto</a>
                        </div>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p> */}
                    
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
