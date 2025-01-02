'use client';
import { useState } from 'react';
import './cadastroProduto.css'; // Certifique-se de que o caminho está correto

export default function Page() {
  const [cpfBusca, setCpfBusca] = useState('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('kg');
  const [valor, setValor] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  const handleQuantidadeChange = (e) => {
    const qtd = e.target.value;
    setQuantidade(qtd);

    // Calcular o valor total
    if (valor && qtd) {
      setValorTotal(parseFloat(valor) * parseFloat(qtd));
    }
  };

  const handleValorChange = (e) => {
    const valor = e.target.value;
    setValor(valor);

    // Calcular o valor total
    if (quantidade && valor) {
      setValorTotal(parseFloat(valor) * parseFloat(quantidade));
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <a href="/cadastro" className="navItem">Home</a>
        <a href="#" className="navItem">Contatos</a>
        <a href="#" className="navItem">Cadastrar Agricultor(a)</a>
     
       
        <a href="#" className="navItem">Relatórios</a>
      </nav>

      {/* Formulário de Cadastro de Fornecimento */}
      <div className="formContainer">
        <h1 className="titulo">Cadastro de Produto</h1>
      
        {/* Busca CPF 
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
            <span className="icon">🔍</span> {/* Ícone de Lupa
          </div>
        </div>
*/}
        {/* Busca Produto */}
        <div className="formField buscaProdutoContainer">
          <label htmlFor="produto" className="label">Novo produto</label>
          <div className="inputIconContainer">
            <input
              type="text"
              id="produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="input"
              placeholder="Digite o nome do produto"
            />
            <span className="icon"></span> {/* Ícone de Lupa */}
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
              <option value="kg">Kg</option>
              <option value="mão">Mão</option>
              <option value="unidade">Unidade</option>
            </select>
          </div>
        </div>

        {/* Valor Unitário e Valor Total */}
        <div className="formField valorContainer">
          <div className="valorField">
            <label htmlFor="valor" className="label">Valor Unitário</label>
            <input
              type="number"
              id="valor"
              value={valor}
              onChange={handleValorChange}
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