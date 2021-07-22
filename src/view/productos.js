import React, { useContext } from 'react'
import { Context } from "../store/appContext"

const Productos = () => {

    const { store, actions } = useContext(Context)
    return (<>
        <div className="carousel mycarousel">
            <img src={"../img/barra" + ".jpg"} className="img-fluid w-100" alt="...imagen..."></img>
            <div className="carousel-caption d-none d-md-block">
                <h1><strong>Productos</strong></h1>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img className="d-block mx-auto py-5 img-fluid" src={"../img/productos1" + ".jpg"} width="700" alt="...imagen..."></img>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">

                <div className="row justify-content-md-center">
                    <div className="col-md-10">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Codigo</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                            <tr>
                                    <th scope="row">1</th>
                                    <td>Tapas</td>
                                    <td><img src={"../img/chapas2" + ".jpg"} width="100" height="30" alt="...imagen..."></img></td>
                                   
                                    <td>Tapas</td>
                                     <td>TAP-E</td>
                                </tr>
                               
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Botella 330 ml</td>
                                    <td><img src={"../img/mp" + ".png"} width="100" height="100" alt="...imagen..."></img></td>
                                 
                                    <td>Botella</td>
                                    <td>BAMP-3</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Botella 660 ml</td>
                                    <td><img src={"../img/mp" + ".png"} width="100" height="100" alt="...imagen..."></img></td>
                                 
                                    <td>Botella</td>
                                    <td>BAMM-6</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Botella 1.5 L</td>
                                    <td><img src={"../img/mp" + ".png"} width="100" height="100" alt="...imagen..."></img></td>
                                 
                                    <td>Botella</td>
                                    <td>BAMG-10</td>
                                </tr>
                               
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Etiqueta 330ml</td>
                                    <td><img src={"../img/etiqueta1" + ".jpg"} width="100" height="100" alt="...imagen..."></img></td>
                                 
                                    <td>Etiqueta</td>
                                    <td>ETIQ-3</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Etiqueta 660ml</td>
                                    <td><img src={"../img/etiqueta1" + ".jpg"} width="100" height="100" alt="...imagen..."></img></td>
                                 
                                    <td>Etiqueta</td>
                                    <td>ETIQ-6</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Etiqueta 1,5L</td>
                                    <td><img src={"../img/etiqueta1" + ".jpg"} width="100" height="100" alt="...imagen..."></img></td>
                                 
                                    <td>Etiqueta</td>
                                    <td>ETIQ-10</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                    <div>
                                <img className="d-block w-100 text-center" src={"../img/productobotellas" + ".jpg"} width="400" height="400" className="rounded mx-auto d-block img-fluid" alt="...imagen..."></img>
                            </div>
                </div>


            </div>

           
        </div>
    </>
    )
}

export default Productos;