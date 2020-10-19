import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import Inventario from './controlInventario';

export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();

    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        await firebase.auth().signOut();
    }

    const login = async () =>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }
    return (
        <div>
            {
                !user &&
                <div>
                    <label htmlFor="email">Correo</label>
                    <input type="email" onChange={(ev) => setEmail(ev.target.value)}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)}></input>
                    
                    <button onClick={login}>Iniciar sesión</button>
                </div>
            }
            {   
                
                user && 
                <div>
                <p>Hola {user.email}</p>
                <button onClick={logout}>Cerrar Sesión</button>
                <br>
                </br>
                <br>
                </br>
                <Inventario />
                </div>
            }
        </div>
    )
}