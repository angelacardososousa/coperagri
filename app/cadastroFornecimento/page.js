'use client';
import { useState } from 'react';
import './cadastroFornecimento.css'; // Certifique-se de que o caminho está correto

export default function Page() {
  const [cpfBusca, setCpfBusca] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  const handleBuscaCpf = () => {
    console.log('Buscando agricultor(a) com CPF:', cpfBusca);
  };

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
        <a href="/cadastroProduto" className="navItem">Produto</a>
       
        <a href="cadastroPrestacao" className="navItem">Prestação de Serviço</a>
       {/* <a href="" className="navItem">Recibo</a>
        <a href="/cadastroDadosBancarios" className="navItem">Dados Bancários</a>
        <a href="/cadastroServico" className="navItem">Serviço</a>
        <a href="" className="navItem">Relatório</a>*/}
      </nav>

      {/* Formulário de Cadastro de Fornecimento */}
      <div className="formContainer">
        <h1 className="titulo">Cadastrar Fornecimento de Produto</h1>

        {/* Busca CPF */}
        <div className="formField buscaCpfContainer">
          <label htmlFor="cpfBusca" className="label">Buscar por CPF</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="cpfBusca"
              value={cpfBusca}
              onChange={(e) => setCpfBusca(e.target.value)}
              className="input"
              placeholder="Digite o CPF do agricultor(a)"
            />
            <span className="icon">🔍</span> {/* Ícone de Lupa */}
          </div>
        </div>

        {/* Busca Produto */}
        <div className="formField buscaProdutoContainer">
          <label htmlFor="produto" className="label">Produto</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              className="input"
              placeholder="Digite o nome do produto"
            />
            <span className="icon">🔍</span> {/* Ícone de Lupa */}
          </div>
        </div>

        {/* Quantidade e Unidade */}
        <div className="formField">
          <label htmlFor="quantidade" className="label">Quantidade</label>
          <div className="quantidadeContainer">
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={handleQuantidadeChange}
              className="input"
              placeholder="Digite a quantidade"
            />
            <select
              id="unidade"
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
              className="input">
              <option value=""disabled hidden>Escolha</option>
              <option value="kg">Kg</option>
              <option value="mão">Mão</option>
              <option value="unidade">Unidade</option>
            </select>
          </div>
        </div>

        {/* Valor Unitário e Valor Total */}
        <div className="formField valorContainer">
          <div className="valorUnitarioField">
            <label htmlFor="valorUnitario" className="label">Valor Unitário</label>
            <input
              type="text"
              id="valorUnitario"
              value={valorUnitario}
              onChange={handleValorUnitarioChange}
              className="input"
              placeholder="Digite o valor unitário"
            />
          </div>
          <div className="valorTotalField">
            <label htmlFor="valorTotal" className="label">Valor Total</label>
            <input
              type="text"
              id="valorTotal"
              value={valorTotal !== null && valorTotal !== undefined 
                ? Number(valorTotal).toLocaleString("pt-PT", { minimumFractionDigits: 2 }): "0,00"}
              readOnly
              className="input"
              placeholder="Valor total"
            />
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


