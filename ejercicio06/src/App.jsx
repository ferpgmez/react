import ListadoResultados from "./ListadoResultados.jsx";
import { useState } from "react";


function App() {
    const [operaciones, setOperacion] = useState([]);

    function sumar(event) {
        event.preventDefault();
        const v1 = parseInt(event.target.valor1.value, 10);
        const v2 = parseInt(event.target.valor2.value, 10);
        const suma = v1 + v2;
        const nuevo = {
            resultado: suma,
            valor1: v1,
            valor2: v2
        }
        setOperacion([nuevo, ...operaciones]);
        event.target.valor1.value = "";
        event.target.valor2.value = "";
    }
    return (
        <div className="container mt-5 p-5 bg-light border">
            <form onSubmit={sumar}>
                <div className="row d-inline-flex p-5">
                    <div className="col-md-4">
                        <label htmlFor="valor1" className="form-label">Valor 1</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" name="valor1" id="valor1" className="form-control" />
                    </div>
                </div>
                <div className="row d-inline-flex p-5">
                    <div className="col-md-4">
                        <label htmlFor="valor2" className="form-label">Valor 2</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" name="valor2" id="valor2" className="form-control" />
                    </div>
                </div>
                <div className="row d-inline-flex p-5">
                    <div className="col-md-4">
                        <input type="submit" value="Sumar" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <ListadoResultados resultados={operaciones} />
        </div>
    );
}

export default App;
