import React from 'react';

function LastInDb(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last {props.type} in db</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="m-0 font-weight-bold text-gray-800">{props.title}</h5>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.img} alt={props.title}/>
                    </div>
                    <p></p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View {props.type} detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastInDb;
