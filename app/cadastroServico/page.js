'use client';
import { useState } from 'react';
import './cadastroServico.css'; // Certifique-se de que o caminho está correto

export default function Page() {
  const [cpfBusca, setCpfBusca] = useState('');
  const [servico, setServico] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  //const handlesetProduto = () => {
   // console.log('Buscando produto:', setProduto);
  //};

  const handleBuscarServico = () => {
    console.log('Buscando serviço:', servico);
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
        <a href="cadastroDadosBancarios" className="navItem">Dados Bancários</a>
        <a href="/cadastroProduto" className="navItem">Produto</a>
        <a href="/cadastroFornecimento" className="navItem">Fornecimento de Produto</a>
        <a href="" className="navItem">Prestação de Serviço</a>
        <a href="#" className="navItem">Recibo</a>
        <a href="#" className="navItem">Relatório</a>
      </nav>

      {/* Formulário de Cadastro de Fornecimento */}
      <div className="formContainer">
        <h1 className="titulo">Cadastrar Serviço</h1>

        {/* Busca CPF */}
        <div className="formField buscaServicoContainer">
          <label htmlFor="servicoBusca" className="label">Buscar por serviço</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="cpfBusca"
              value={cpfBusca}
              onChange={(e) => setCpfBusca(e.target.value)}
              className="input"
              placeholder="Digite o nome do serviço"
            />
            <span className="icon">🔍</span> {/* Ícone de Lupa */}
          </div>
        </div>

        {/* Busca Serviço */}
        <div className="formField buscaServicoContainer">
          <label htmlFor="servico" className="label">Novo serviço</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="servico"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              className="input"
              placeholder="Digite o nome do serviço"
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