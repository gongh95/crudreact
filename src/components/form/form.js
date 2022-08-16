import axios from "axios";
import { useEffect, useState } from "react";

export default function Form() {
    
    const url = "https://whispering-dawn-56704.herokuapp.com/users/agregar";

    const [formulario, setFormulario] = useState(
        {
            nombre: '',
            apellido: '',
            direccion: '',
            telefono: ''
        }
    );
        
    function handleChange(event) {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value })
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formulario);
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h4>Agregar usuario</h4>
                <label>Nombre<input type="text"
                    onChange={handleChange}
                    name="nombre"
                    value={formulario.nombre}
                    placeholder="Nombre" />
                </label>
                <label>Apellido<input type="text"
                    onChange={handleChange}
                    name="apellido"
                    value={formulario.apellido}
                    placeholder="Apellido" />
                </label>
                <label>Dirección<input type="text"
                    onChange={handleChange}
                    name="direccion"
                    value={formulario.direccion}
                    placeholder="Dirección" />
                </label>
                <label>Telefono<input type="number"
                    onChange={handleChange}
                    name="telefono"
                    value={formulario.telefono}
                    placeholder="Telefono" />
                </label>
                <button type="submit">
                    Enviar datos
                </button>
            </form>
        </section>
    );
}