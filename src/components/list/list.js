export default function List({ users }) {
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
                {users.map(user => {
                    return (
                    <tr key={`${user.id}_${user.nombre}`}>{/* ID + Nombre para key*/}
                        <td>{user.id}</td>
                        <td>{user.nombre}</td>
                        <td>{user.apellido}</td>
                        <td>{user.direccion}</td>
                        <td>{user.telefono}</td>
                        <button>X</button>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    </section>
    );
}