'use client';
import { useState } from 'react';
import './cadastroDadosBancarios.css'; // Certifique-se de que o caminho está correto

export default function Page() {
  const [cpfBusca, setCpfBusca] = useState('');
  const [conta, setConta] = useState('');
  const [banco, setBanco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  const handleBuscaCpf = () => {
    console.log('Buscando agricultor(a) com CPF:', cpfBusca);
  };

  const handleBuscarConta = () => {
    console.log('Buscando conta:', conta);
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
       
        <a href="/cadastroFornecimento" className="navItem">Fornecimento de Produto</a>
        <a href="/cadastroPrestacao" className="navItem">Prestação de Serviço</a>
        {/*<a href="" className="navItem">Recibo</a>
         <a href="/cadastroServico" className="navItem">Serviço</a>
        <a href="#" className="navItem">Relatório</a>*/}
      </nav>

      {/* Formulário de Cadastro de Fornecimento */}
      <div className="formContainer">
        <h1 className="titulo">Cadastrar Dados Bancários</h1>

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

        {/* banco, agencia e tipo */}
        <div className="formField">
          <label htmlFor="quantidade" className="label"> </label>
          <div className="quantidadeContainer">
          <select
            id="banco"
            value={banco}
            onChange={(e) => setBanco(e.target.value)}
            className="inputBanco"
          >             
                <option value=""disabled hidden>Banco</option>
                <option value="Banco do Brasil">Banco do Brasil-001</option>
                <option value="Itaú Unibanco">Itaú Unibanco-341</option>
                <option value="Bradesco">Bradesco-237</option>
                <option value="Caixa Econômica Federal">Caixa Econômica Federal-104</option>
                <option value="Nubank">Nubank-260</option>
                <option value="Inter">Inter-077</option>
                <option value="Outro">Outro</option>
            </select>
            
            <input
              type="text"
              id="quantidade"
              value={quantidade}
              onChange={handleQuantidadeChange}
              className="inputAgencia"
              placeholder="Agência"
              inputMode="numeric"
              pattern="\d"
            />
            <select
                id="conta"
                value={conta}
                onChange={(e) => setConta(e.target.value)}
                className="input"
>               <option value="" disabled hidden>Tipo da Conta</option>
                <option value="poupanca">Poupança</option>
                <option value="contaCorrente">Conta Corrente</option>
            </select>

          </div>
        </div>

        {/* conta e pix */}
        <div className="formField valorContainer">
          <div className="valorUnitarioField">
            <label htmlFor="valorUnitario" className="label"></label>
            <input
              type="text"
              id="valorUnitario"
              value={valorUnitario}
              onChange={handleValorUnitarioChange}
              className="input"
              placeholder="Digite o número da conta"
              inputMode="numeric"
              pattern='\d'
            />
          </div>
          <div className="quantidadeField">
            <label htmlFor="quantidade" className="label"></label>
            <input
              type="text"
              id="quantidade"
              value={quantidade}
              readOnly
              className="input"
              placeholder="chave pix"
              inputMode="numeric"
              pattern="\d"
            />
          </div>
        </div>

        {/* Upload de Documento Bancário */}
        <div class="formField">
    <label for="arquivoBanco" class="label">Anexar documento da Conta</label>
    <br></br>
    <input type="file" id="arquivoBanco" class="fileInput" />
    <button id="uploadButton" class="button">Salvar</button>
    <p id="fileName" class="fileName"></p>
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

