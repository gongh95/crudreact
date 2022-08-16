import axios from "axios";
import { useEffect, useState } from "react";

export default function List() {

    const url = "http://localhost:3030/users";

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const fetchear = async () => {
        try {
            setTimeout(() => { // simular asincronia
                const data = axios.get(url)
                .then((response) => {
                console.log(response.data.dataJson);
                setLoading(false);
                setUsers(response.data.dataJson);
                })
                .catch((err) => {
                setError(true);
                console.log(err.message);
                });
            }, 200) // tiempo para la asincronia
            
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarUser = () => {
        //let listaActualizada = users.filter(usuario => usuario != users.user.id);
        let idParaEliminar = users[0];
        console.log(idParaEliminar);
        let listaActualizada = users.filter(usuario => usuario.user.id == idParaEliminar)
        console.log(listaActualizada);
        // setUsers(listaActualizada);
    }
    
    useEffect(() => {
        fetchear();
    }, [])

    return (
    <section>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Dirección</th>
                    <th>Tel</th>
                </tr>
            </thead>
            <tbody>
                {error ? <tr><td>Error</td></tr> : loading ? <tr><td>Cargando...</td></tr> : ''}
                {users.map(user => {
                    return (
                    <tr key={`${user.user.id}_${user.user.nombre}`}>{/* ID + Nombre para key*/}
                        <td>{user.user.id}</td>
                        <td>{user.user.nombre}</td>
                        <td>{user.user.apellido}</td>
                        <td>{user.user.direccion}</td>
                        <td>{user.user.telefono}</td>
                        <td><button>X</button></td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    </section>
    );
}