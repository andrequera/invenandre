import React, { useContext } from 'react'
import { Context } from "../store/appContext"



const Cotizante = () => {
    const { store, actions } = useContext(Context)
    //const [state, setState]= useState({}) se quita el setState porque lo cambie a global
    // console.log(state) esto era con el store que cambie a flux
    console.log(store)

   
    return (<>

        <div className="container">
            <div className="row pt-4">
                <div className="col-md-6 offset-3">
                    <h1>Cotizante</h1>
                    <h1>TRABAJANDO EN ESTO</h1>

                    <form onSubmit={capturaEvento => actions.enviarFormulario(capturaEvento)}>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationServer01">Primer Nombre</label>
                                <input type="text" name="nombre" className={"form-control " +(store.nombre !== "" ? "is-valid": "is-invalid")} id="validationServer01" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
                                <div className="valid-feedback">
                                    Aceptado!
      </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationServer02">Primer Apellido</label>
                                <input type="text" name="apellido" className={"form-control " +(store.apellido !== "" ? "is-valid": "is-invalid")} id="validationServer02" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
                                    <div className="valid-feedback">
                                        Aceptado!
      </div>
                            </div>
                        </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationServer03">Empresa</label>
                                    <input type="text" name="empresa" className={"form-control " +(store.empresa !== "" ? "is-valid": "is-invalid")} id="validationServer03" aria-describedby="validationServer03Feedback" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
                                        <div id="validationServer03Feedback" className="invalid-feedback">
                                            Ingrese empresa.
      </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                        <label for="validationServer03">Email</label>
                                        <div className="input-group is-invalid">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="validatedInputGroupPrepend">@</span>
                                            </div>
                                            <input type="email" name="email" className={"form-control " +(store.email !== "" ? "is-valid": "is-invalid")} aria-describedby="validatedInputGroupPrepend" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />

                                </div>
                                <div className="invalid-feedback">
                                                Ingrese un email valido.
                                    </div>
                                        </div>

                                        <div className="col-md-6 mb-3 offset-6">
                                            <label for="validationServer03">Telefono</label>
                                            <div className="input-group is-invalid">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="validatedInputGroupPrepend">+</span>
                                                </div>
                                                <input type="number" name="telefono" className={"form-control " +(store.telefono !== "" ? "is-valid": "is-invalid")} aria-describedby="validatedInputGroupPrepend" required onChange={capturaEventos => actions.capturaCampos(capturaEventos)} />
                                </div>
                                <div className="invalid-feedback">
                                                    Ingrese un telefono valido.
                                    </div>
                                            </div>

                                        </div>

                                        <div>
                                            <h1>ACA VA LA LISTA</h1>

                                        </div>

                                        <button className="btn btn-primary" type="button" onClick= {capturaEvento => actions.alerta(capturaEvento)}>Limpiar</button>
                                        <button className="btn btn-primary offset-6" type="submit">Enviar</button>
                    </form>

                                </div>
                            </div>
                        </div>

    </>)
}
export default Cotizante;