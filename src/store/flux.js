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
            producto: [
                {
                    name: "Botella 330 ml",
                    sku: "BAMP-3",
                    descripcion: "Agua de manantial en botella PET de 330 ml, con tapa y etiqueta.",
                    cantidaddebotellas:"1152"
                },
                {
                    name: "Botella 660 ml",
                    sku: "BAMM-6",
                    descripcion: "Agua de manantial en botella PET de 600 ml, con tapa y etiqueta.",
                    cantidaddebotellas:"864"
                },
                {
                    name: "Botella 1.5 L",
                    sku:"BAMG-10",
                    descripcion: "Agua de manantial en botella PET de 1.5L, con tapa y etiqueta.",
                    cantidaddebotellas:"216"
                },

            ],
            paleta: "0",





        },
        actions: {
            // son funciones, no tiene const y usa :, es separado por comas... Ademas, debo llamarlas con actions.funcion

            alertaLimpiar: (capturaEvento) => {
                capturaEvento.preventDefault()
                //preventDefault para que no se envie el formulario

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
                            setStore({ nombre: "", apellido: "", empresa: "", email: "", telefono: "", paleta: ""})
                        } else {
                            swal("Continua realizando tu cotizacion!");
                        }
                    });



            },
            // onClick={capturaEvento => actions.alerta(capturaEvento)}
            enviarFormulario: (capturaEvento) => {
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