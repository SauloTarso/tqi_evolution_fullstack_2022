import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function AppCompra() {

  // Objeto produto
  const produto = {
    id: 0,
    titulo: '',
    autor: '',
    editora: '',
    data: '',
    preco: 0.0
  }

  //useState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //useEffect
  useEffect(() => {
    fetch("http://localhost:8080/compras/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (evento) => {
    setObjProduto({ ...objProduto, [evento.target.name]: evento.target.value });
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/compras/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setProdutos([...produtos, retorno_convertido]);
          alert('Produto cadastrado com sucesso!')
          limparFormulario();
        }
      })
  }

  //Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/compras/alterar', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          //Mensagem
          alert('Produto alterado com sucesso!')

          //Copia do vetor de produtos
          let vetorTemp = [...produtos];

          //indice
          let indice = vetorTemp.findIndex((p) => {
            return p.id === objProduto.id;
          });

          //Alterar produto do vetorTemp
          vetorTemp[indice] = objProduto;

          //Atualizar o vetor de produtos
          setProdutos(vetorTemp);

          //Limpar o formulário
          limparFormulario();
        }
      })
  }

  //Remover produto
  const remover = () => {
    fetch('http://localhost:8080/compras/remover/' + objProduto.id, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        //Mensagem
        alert(retorno_convertido.mensagem);

        //Copia do vetor de produtos
        let vetorTemp = [...produtos];

        //indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objProduto.id;
        });

        //Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        //Atualizar o vetor de produtos
        setProdutos(vetorTemp);

        //Limpar formulário
        limparFormulario();
      })
  }

  //Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    //botao cadastrar ON
    setBtnCadastrar(true);
  }

  //Selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }



  //retorno
  return (
    <div>
      <h1 className='loja'>Livraria Online</h1>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar} />
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default AppCompra;
