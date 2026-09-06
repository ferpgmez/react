import { useState } from "react";
import CoordenadaFlecha from "./CoordenadaFlecha.jsx";


function App() {
    const [visible, setVisible] = useState(true);
    function ocultar() {
        setVisible(false);
    }
    return (
        <div className="container mt-5 p-5 bg-light border">
            {visible ? <CoordenadaFlecha/> :  <p>Se ocultó el la coordenada </p>}
            <button className="btn btn-danger" onClick={ocultar}>Ocultar</button>
        </div>
    )
}

export default App

