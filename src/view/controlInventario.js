import React, { useContext, useState } from 'react'
import { Context } from "../store/appContext"


const Inventario = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                </div>
                <div>
                    <div>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="talist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Pedidos</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Materia Prima</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">"Inventario"</a>
                            </div>
                        </nav>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                            <div className="row pt-4">
                                <div className="col-12">

                                    <h1>Pedidos</h1>


                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">SKU</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Cliente</th>
                                                <th scope="col">Paletas</th>
                                                <th scope="col">Cantidades</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Respuesta</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.pedidos.map((pedido, i) => {
                                                    return (
                                                        pedido.datos.map((dato, j) => {
                                                            return (
                                                                <tr key={j}>
                                                                    <th scope="row">{i + 1}</th>
                                                                    <td>{dato.sku}</td>
                                                                    <td>{dato.name}</td>
                                                                    <td>{pedido.nombre}</td>
                                                                    <td>{dato.paleta}</td>
                                                                    <td>{dato.cantidaddebotellas}</td>
                                                                    <td>9/10/2020</td>
                                                                    <td><i class="far fa-check-circle fa-2x"></i><i class="far fa-times-circle fa-2x"></i></td>
                                                                </tr>
                                                            )
                                                        })
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                            <div className="row pt-4">
                                <div className="col-12">
                                    <h1>Materia Prima</h1>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">SKU</th>
                                                <th scope="col">Tapas</th>
                                                <th scope="col">Botellas de PET 330ml</th>
                                                <th scope="col">Botellas de PET 660ml</th>
                                                <th scope="col">Botellas de PET 1,5L</th>
                                                <th scope="col">Agua mineral</th>
                                                <th scope="col">Etiqueta 330ml</th>
                                                <th scope="col">Etiqueta 660ml</th>
                                                <th scope="col">Envoltura 1</th>
                                                <th scope="col">Envoltura 2</th>
                                                <th scope="col">Paletas</th>
                                                <th scope="col">Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>BAMP-3</td>
                                                <td>Botella 330ml</td>
                                                <td>Fatima</td>
                                                <td>5</td>
                                                <td>768765</td>
                                                <td>9/10/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <i class="fas fa-pencil-alt fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"> <div className="row pt-4">
                            <div className="col-12"><h1>Inventario</h1>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">SKU</th>
                                            <th scope="col">Tapas</th>
                                            <th scope="col">Botellas de PET 330ml</th>
                                            <th scope="col">Botellas de PET 660ml</th>
                                            <th scope="col">Botellas de PET 1,5L</th>
                                            <th scope="col">Agua mineral</th>
                                            <th scope="col">Etiqueta 330ml</th>
                                            <th scope="col">Etiqueta 660ml</th>
                                            <th scope="col">Etiqueta 1,5L</th>
                                            <th scope="col">Envoltura 1</th>
                                            <th scope="col">Envoltura 2</th>
                                            <th scope="col">Paletas</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col"><i class="fas fa-plus fa-2x"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>BAMP-3</td>
                                            <td>Botella 330ml</td>
                                            <td>Fatima</td>
                                            <td>5</td>
                                            <td>768765</td>
                                            <td>9/10/2020</td>
                                            <td>@twitter</td>
                                            <td>BAMP-3</td>
                                            <td>Botella 330ml</td>
                                            <td>Botella 330ml</td>
                                            <td>Fatima</td>
                                            <td>5</td>
                                            <td>768765</td>
                                            <td>9/10/2020</td>
                                            <td><i class="fas fa-pencil-alt fa-2x"></i><i class="fas fa-trash fa-2x"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Inventario;