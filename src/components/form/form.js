export default function Form() {
    return (
        <section className="form">
            <h4>Agregar usuario</h4>
            <label>Nombre<input type="text" placeholder="Nombre" required/></label>
            <label>Apellido<input type="text" placeholder="Apellido" required/></label>
            <label>Dirección<input type="text" placeholder="Dirección" required/></label>
            <label>Telefono<input type="number" placeholder="Telefono" required/></label>
            <input type="submit" value="Enviar datos"/>
        </section>
    );
}