import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/input";
import Card from "./components/card";
import Container from "./components/container";
import Button from "./components/button";

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [formulario, handleChange, reset] = useFormulario({
        name: "",
        lastname: "",
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();
        setUsuarios([...usuarios, formulario]);
        reset();
    };

    return (
        <div style={{ marginTop: "15%" }}>
            <Container>
                <Card>
                    <div style={{ padding: 20 }}>
                        <form onSubmit={submit}>
                            <Input
                                label="Nombre"
                                name="name"
                                value={formulario.name}
                                onChange={handleChange}
                            />
                            <Input
                                label="Apellido"
                                name="lastname"
                                value={formulario.lastname}
                                onChange={handleChange}
                            />
                            <Input
                                label="Correo"
                                name="email"
                                value={formulario.email}
                                onChange={handleChange}
                            />
                            <Button> Enviar </Button>
                        </form>
                    </div>
                </Card>
                <Card>
                    <ul>
                        {usuarios.map((x) => (
                            <li
                                key={x.email}
                            >{`${x.name} ${x.lastname} ${x.email}`}</li>
                        ))}
                    </ul>
                </Card>
            </Container>
        </div>
    );
}

export default App;
