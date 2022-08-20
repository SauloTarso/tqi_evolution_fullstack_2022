function Tabela({ vetor, selecionar }) {
    return (
        <table className='table'>
            <thead>
                <tr>                    
                    <th>#</th>
                    <th>Capa</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Ano de publicação</th>
                    <th>Preço</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.capa}</td>
                            <td>{obj.titulo}</td>
                            <td>{obj.autor}</td>
                            <td>{obj.editora}</td>
                            <td>{obj.data}</td>
                            <td>{obj.preco}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;