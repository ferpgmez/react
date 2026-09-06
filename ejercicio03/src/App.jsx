import Dado from "./Dado.jsx"
import { useState } from "react";


function generarValor() {
    return Math.trunc(Math.random() * 6 + 1);
}

function App() {
    function tirar() {
        setNumero1(generarValor());
        setNumero2(generarValor());
        setNumero3(generarValor());
    }

    const [numero1, setNumero1] = useState(generarValor());
    const [numero2, setNumero2] = useState(generarValor());
    const [numero3, setNumero3] = useState(generarValor());

    return (
        <div className="container mt-5 p-5 border">
            <Dado numero={numero1} />
            <Dado numero={numero2} />
            <Dado numero={numero3} />
            <button className="btn btn-primary" onClick={tirar}>Tirar</button>
        </div>
    )
}

export default App
