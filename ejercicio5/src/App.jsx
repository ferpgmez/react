import { useState } from 'react'
import Dado from './dado.jsx'

function App() {
    function generarValor() {
        return Math.trunc(Math.random() * 6 + 1);
    }

    const [numero1, setNumero1] = useState(() => generarValor());
    const [numero2, setNumero2] = useState(() => generarValor());
    const [numero3, setNumero3] = useState(() => generarValor());

    function tirar() {
        setNumero1(generarValor());
        setNumero2(generarValor());
        setNumero3(generarValor());
    }

    return (
        <div className="container mt-5 p-5 border bg-light">
            <Dado valor={numero1} />
            <Dado valor={numero2} />
            <Dado valor={numero3} />
            <button className="btn btn-dark" onClick={tirar}>Tirar</button>
        </div>
    )
}

export default App
