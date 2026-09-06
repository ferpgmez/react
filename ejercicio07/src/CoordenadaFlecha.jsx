import { useEffect, useState } from "react";

function CoordenadaFlecha() {
    const [position, setPosition] = useState({x: 0, y: 0})
    function fijarPosicion(e) {
        setPosition({x: e.clientX, y: e.clientY});
    }
    useEffect(() => {
        window.addEventListener('mousemove', fijarPosicion);
        return() => {
            window.removeEventListener('mousemove', fijarPosicion);
            console.log("se borro el registro de eventos");
        }
    }, [])

    return (
        <div>
            <p>{position.x} - {position.y}</p>
        </div>
    )
}

export default CoordenadaFlecha
