import React from 'react';
import ValidationData from './ValidationData';

let tableRowsData = [
    {
        Title: 'Kit fetish',
        ventas: '12300',
        calificacion: '5',
        Categories: ['Fetiches'],
    },
    {
        Title: 'Vibrador',
        ventas: '1420',
        calificacion: '4.8',
        Categories: ['vibradores'],
    },
    {
        Title: 'lubricantes Multiorgasmiscos',
        ventas: '1420',
        calificacion: '4.8',
        Categories: ['Lubricantes'],

    },
    
]


function TableData (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Productos</th>
                                <th>Total Ventas</th>
                                <th>Calificacion</th>
                                <th>Categorias</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ValidationData { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default TableData;