import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  const setValor = (chave, valor) => {
    setValores({
      ...valores,
      [chave]: valor,
    });
  };

  const lidaComMudancaDeInput = (event) => {
    event.preventDefault();
    setValor(
    event.target.getAttribute('name'),
    event.target.value
    )};


  const lidaComOnSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, valores]);
    setValor("");
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={lidaComOnSubmit}>
        <FormField
          label="Nome da Categoria:"
          name="nome"
          type="text"
          value={valores.nome}
          onChange={lidaComMudancaDeInput}
        />


        <FormField
             label="Descrição:"
             name="descricao"
             type="text"
             value={valores.descricao}
             onChange={lidaComMudancaDeInput}
        />
        <FormField
           label="Cor:"
           name="cor"
           type="color"
           value={valores}
           onChange={lidaComMudancaDeInput}
        />

        <button type="onSubmit">Cadastrar</button>
      </form>

      <ul onSubmit={lidaComMudancaDeInput}>
        {categorias.map((categoria) => {
          return <li key={`${categoria}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/"> Ir Para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
