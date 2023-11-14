import React from "react";


function LastMovieInDb() {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4 ">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              UserType in Data Base
            </h5>
          </div>

          <div className="card-body">
            <div className="row content">

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">User</div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Admin</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastMovieInDb;
