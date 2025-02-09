'use client';
import { useState } from 'react';
import './cadastroPrestacao.css'; // Certifique-se de que o caminho está correto

export default function Page() {
  const [cpfBusca, setCpfBusca] = useState('');
  const [servico, setServico] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('kg');
  const [valorUnitario, setValorUnitario] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  const handleBuscaCpf = () => {
    console.log('Buscando agricultor(a) com CPF:', cpfBusca);
  };

  const handleBuscarServico = () => {
    console.log('Buscando servico:', servico);
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
        <a href="/inicial" className="navItem">Home</a>
        <a href="/fornecedor" className="navItem">Agricultor(a)</a>
        <a href="/cadastroDadosBancarios" className="navItem">Dados Bancários</a>
        <a href="/cadastroProduto" className="navItem">Produto</a>
        <a href="/cadastroServico" className="navItem">Serviço</a>
        <a href="/cadastroFornecimento" className="navItem">Fornecimento de Produto</a>
        <a href="" className="navItem">Recibo</a>
        <a href="#" className="navItem">Relatório</a>
      </nav>

      {/* Formulário de Cadastro de Fornecimento */}
      <div className="formContainer">
        <h1 className="titulo">Cadastrar Prestação de Serviço</h1>

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

        {/* Busca Serviço */}
        <div className="formField buscaServicoContainer">
          <label htmlFor="servico" className="label">Serviço</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="servico"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              className="input"
              placeholder="Digite o nome do serviço"
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
                id="text"
                value={servico}
                onChange={(e) => setUnidade(e.target.value)}
                className="input"
>               <option value="" disabled hidden>Escolha</option>
                <option value="dia">Dia</option>
                <option value="hora">Hora</option>
            </select>

          </div>
        </div>

        {/* Valor Unitário e Valor Total */}
        <div className="formField valorContainer">
          <div className="valorUnitarioField">
            <label htmlFor="valorUnitario" className="label">Valor Unitário</label>
            <input
              type="number"
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
              value={valorTotal}
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