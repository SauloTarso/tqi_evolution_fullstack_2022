function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}) {
    return(
        <form>
            <input type='text' value={obj.titulo} onChange={eventoTeclado} name='titulo' placeholder='Título' className='form-control' />
            <input type='text' value={obj.autor} onChange={eventoTeclado} name='autor' placeholder='Autor' className='form-control' />
            <input type='text' value={obj.editora} onChange={eventoTeclado} name='editora' placeholder='Editora' className='form-control' />
            <input type='text' value={obj.data} onChange={eventoTeclado} name='data' placeholder='Publicação' className='form-control' />
            <input type='price' value={obj.preco} onChange={eventoTeclado} name='preco' placeholder='Preço' className='form-control' />

            {
                botao
                ?
                <input type='button' value='Comprar' onClick={cadastrar} className='btn btn-primary' />
                
                :
                <div>
                    <input type='button' value='Alterar' onClick={alterar} className='btn btn-warning' />
                    <input type='button' value='Vender' onClick={remover} className='btn btn-danger' />
                    <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary' />
                </div>
            }

        </form>
    )
}

export default Formulario;