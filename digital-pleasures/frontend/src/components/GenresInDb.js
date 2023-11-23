import React from "react";

function GenresInDb() {
  return (
    
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4 ">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categories in Data Base
            </h5>
          </div>

          <div className="card-body">
            <div className="row content">

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <button className="card-body">Juguetes</button>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <button className="card-body">Lubricantes</button>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <button className="card-body">Lencería</button>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <button className="card-body">Fetiche</button>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <button className="card-body">Diversión erótica</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
  );
}


export default GenresInDb;
