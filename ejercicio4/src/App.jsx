function App() {
    return (
        <div className="container mt-5 p-5 border">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                    <label className="form-label" htmlFor="valor1">Introduce el primer valor</label>
                </div>
                <div className="col-md-8">
                    <input type="number" className="form-control" id="valor1" />
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                    <label className="form-label" htmlFor="valor2">Introduce el segundo valor</label>
                </div>
                <div className="col-md-8">
                    <input type="number" className="form-control" id="valor2" />
                </div>
                <div className="col-md-8">
                    <button type="button" className="btn btn-primary" onClick={calcular}>Calcular</button>
                </div>
            </div>
        </div>
    )
}

function calcular(e) {
    e.preventDefault()
    const v1 = parseInt(document.getElementById('valor1').value)
    const v2 = parseInt(document.getElementById('valor2').value)
    const resultado = v1 + v2
    alert(resultado)
}

export default App
