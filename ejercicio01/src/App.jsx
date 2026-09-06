function App() {
    return (
        <div className="container mt-5 p-5 bg-light border">
            <form onSubmit={presion}>
                <div className="row mt-3 d-inline-flex">
                    <div className="col-md-4">
                        <label htmlFor="valor1" className="form-label text-primary">Valor 1</label>
                    </div>
                    <div className="col-md-8">
                        <input type="tex" id="valor1" name="valor1" className="form-control border-primary" />
                    </div>
                </div>
                <div className="row mt-3 d-inline-flex">
                    <div className="col-md-4">
                        <label htmlFor="valor2" className="form-label text-primary">Valor 2</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" id="valor2" name="valor2" className="form-control border-primary" />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Sumar</button>
            </form>
        </div>
    );

    function presion(e) {
        e.preventDefault();
        const v1 = parseInt(e.target.valor1.value, 10);
        const v2 = parseInt(e.target.valor2.value, 10);
        const suma = v1 + v2;
        alert("la suma es" + suma)
    }
}

export default App
