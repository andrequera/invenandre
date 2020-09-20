import swal from 'sweetalert';


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // bodega
            cotizante: null,
            nombre: "",
            apellido: "",
            empresa: "",
            email: "",
            telefono: "",


        },
        actions: {
            // funciones, no tiene const y usa :, es separado por comas... Ademas, debo llamarlas con actions.funcion

            alerta: (capturaEvento) => {
                capturaEvento.preventDefault()
                // preventDefault para que no se envie el formulario
                swal({
                    title: "Alerta?",
                    text: "Estas seguro que quieres borrar tu cotizacion?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("Poof! Cotizacion borrada!", {
                                icon: "success",
                            });
                        } else {
                            swal("Continua realizando tu cotizacion!");
                        }
                    });
            },
            enviarFormulario: (capturaEvento) =>{
                capturaEvento.preventDefault()
                // preventDefault para que no se envie el formulario
                
                swal("Good job!", "You clicked the button!", "success");

            },
            capturaCampos: (capturaEventos) => {
                const store = getStore();
                // capturaEventos es lo que recibe, lo que ingresa el usuario en el formulario, lo asocio abajo... onChange={capturaEventos => capturaCampos(capturaEventos)}
                // "todos los eventos que yo realizo los captura campos", por eso los hago en cada input... onChange={capturaEventos => capturaCampos(capturaEventos)
               
                console.log(capturaEventos.target.value)
                setStore({ ...store, [capturaEventos.target.name]: capturaEventos.target.value })
                // ....state, para que clone todos los valores que he ingresado; cambio a setStore y Store porque ahora es global, antes era setState y state; colocar const store = getStore();
            }


        }
    }
};
export default getState;