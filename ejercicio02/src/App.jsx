import { useState } from 'react'

function App() {
    function borrar(cod) {
        const temp = articulos.filter((art) => art.codigo !== cod);
        setArticulos(temp);
    }
    const [articulos, setArticulos] = useState([{
        codigo: 1,
        descripcion: "peras",
        precio: 1.50,
    }, {
        codigo: 2,
        descripcion: "manzanas",
        precio: 2.50,
    }, {
        codigo: 3,
        descripcion: "uvas",
        precio: 3.50,
    }]);

    return (
        <div className="container mt-5 p-5 border">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {articulos.map(art => {
                        return (
                            <tr key={art.codigo}>
                                <td>{art.codigo}</td>
                                <td>{art.descripcion}</td>
                                <td>{art.precio}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => borrar(art.codigo)}>Borrar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default App
