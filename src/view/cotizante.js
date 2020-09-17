import React, { useContext } from 'react'
import { Context } from "../store/appContext"

const Cotizante = () => {
    const { store, actions } = useContext(Context)
    return (<>

        <div className="container">
            <div className="row pt-4">
                <div className="col-md-6 offset-3">
                    <h1>Cotizante</h1>
                    <h1>ESTOY TRABAJANDO EN ESTO</h1>

                </div>
            </div>
        </div>

    </>)
}
export default Cotizante;