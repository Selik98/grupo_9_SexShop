import React from 'react';
import ChartRow from './ChartRow';


let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama', 'Acción', 'Comedia'],
        Awards: 3
    },

]


function Chart(props) {


    const data = props.content.map(item => item.return);
    console.log(data);

    data.map(console.log)

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body chart">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        {props.type === 'user' &&
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>ID</th>
                                    <th>Img</th>
                                </tr>
                            </thead>
                        }
                        {props.type === 'product' &&
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Descripcion</th>
                                    <th>Img</th>
                                </tr>
                            </thead>
                        }

                        <tbody>
                            {   data ?
                                data.map((row, i) => {
                                    return <ChartRow type={props.type} {...row} key={i} />
                                })
                                : <p>P de Pelotudo</p>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;