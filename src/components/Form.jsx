import { useState } from "react";
const Form = ({caracters}) => {
    const [formData, setFormData] = useState({
        nombre1: "",
        nombre2: "",
        nombre3: "",
        nombre4: "",
        nombre5: "",
        nombre6: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert("Formulario enviado");
    };
    console.log(formData);
    return (
        <>
            <div className="App-header">
                <h2>Formulario de Registro</h2>
                <p>{caracters.asesino}</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre del usuario 1:</label>
                        <input
                            type="text"
                            id="nombre1"
                            name="nombre1"
                            value={formData.nombre1}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre del usuario 2:</label>
                        <input
                            type="text"
                            id="nombre2"
                            name="nombre2"
                            value={formData.nombre2}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre del usuario 3:</label>
                        <input
                            type="text"
                            id="nombre3"
                            name="nombre3"
                            value={formData.nombre3}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre del usuario 4:</label>
                        <input
                            type="text"
                            id="nombre4"
                            name="nombre4"
                            value={formData.nombre4}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre del usuario 5:</label>
                        <input
                            type="text"
                            id="nombre5"
                            name="nombre5"
                            value={formData.nombre5}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre del usuario 6:</label>
                        <input
                            type="text"
                            id="nombre6"
                            name="nombre6"
                            value={formData.nombre6}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}
export default Form;