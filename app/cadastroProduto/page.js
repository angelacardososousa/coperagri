'use client';
import { useState } from 'react';
import './cadastroProduto.css'; // Certifique-se de que o caminho está correto

export default function Page() {
  const [cpfBusca, setCpfBusca] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('kg');
  const [valorUnitario, setValorUnitario] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  //const handlesetProduto = () => {
   // console.log('Buscando produto:', setProduto);
  //};

  const handleBuscarProduto = () => {
    console.log('Buscando produto:', produto);
  };

  const handleQuantidadeChange = (e) => {
    const qtd = e.target.value;
    setQuantidade(qtd);

    // Calcular o valor total
    if (valorUnitario && qtd) {
      setValorTotal(parseFloat(valorUnitario) * parseFloat(qtd));
    }
  };

  const handleValorUnitarioChange = (e) => {
    const valor = e.target.value;
    setValorUnitario(valor);

    // Calcular o valor total
    if (quantidade && valor) {
      setValorTotal(parseFloat(valor) * parseFloat(quantidade));
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <a href="/cadastro" className="navItem">Home</a>
        <a href="/fornecedor" className="navItem">Agricultor(a)</a>
        
        <a href="/cadastroFornecimento" className="navItem">Fornecimento de Produto</a>
        <a href="/cadastroPrestacao" className="navItem">Prestação de Serviço</a>
        {/*<a href="#" className="navItem">Recibo</a>
        <a href="/cadastroServico" className="navItem">Serviço</a>
        <a href="/cadastroDadosBancarios" className="navItem">Dados Bancários</a>
        <a href="#" className="navItem">Relatório</a>*/}
      </nav>

      {/* Formulário de Cadastro de Fornecimento */}
      <div className="formContainer">
        <h1 className="titulo">Cadastrar Produto</h1>

        {/* Busca CPF */}
        <div className="formField buscaProdutoContainer">
          <label htmlFor="produtoBusca" className="label">Buscar por produto</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="cpfBusca"
              value={cpfBusca}
              onChange={(e) => setCpfBusca(e.target.value)}
              className="input"
              placeholder="Digite o nome do produto"
            />
            <span className="icon">🔍</span> {/* Ícone de Lupa */}
          </div>
        </div>

        {/* Busca Produto */}
        <div className="formField buscaProdutoContainer">
          <label htmlFor="produto" className="label">Novo produto</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              className="input"
              placeholder="Digite o nome do produto"
            />
            <span className="icon"></span> {/* Ícone de Lupa */}
          </div>
        </div>

          {/* Botões de Ação */}
        <div className="formActions">
          <button className="button">Confirmar</button>
          <button className="button buttonCorrigir">Corrigir</button>
        </div>
      </div>
    </div>
  );
}