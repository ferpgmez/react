function ListadoResultados(props) {
    return (
        <ul className="list-group">
            {props.resultados.map((elemento) =>
                <li className="list-group-item">
                    La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}
                </li>
            )}
        </ul>
    )
}

export default ListadoResultados;