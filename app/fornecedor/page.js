'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './fornecedor.css'; // Certifique-se de que o caminho está correto

export default function Page() {
  const [cpfBusca, setCpfBusca] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [apelido, setApelido] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [dapCaf, setDapCaf] = useState('');

  const handleBuscaCpf = () => {
    console.log('Buscando agricultor(a) com CPF:', cpfBusca);
  };

  const handleConfirmar = () => {
    // Logica para confirmar o cadastro
    console.log('Cadastro Confirmado:', {
      nomeCompleto,
      apelido,
      telefone,
      cpf,
      rg,
      endereco: { logradouro, numero, bairro, cep },
      dapCaf
    });
  };

  const handleCorrigir = () => {
    // Lógica para corrigir o cadastro (resetar campos)
    setNomeCompleto('');
    setApelido('');
    setTelefone('');
    setCpf('');
    setRg('');
    setLogradouro('');
    setNumero('');
    setBairro('');
    setCep('');
    setDapCaf('');
  };

  return (
    <div className='container'>
      <nav className='navbar'>
     
        <a href="/cadastro" className='navItem'>Home</a>
        <a href="/cadastroProduto" className='navItem'>Produto</a>
       
        <a href="/cadastroFornecimento" className='navItem'>Fornecimento de Produto</a>
        <a href="cadastroPrestacao" className='navItem'>Prestação de Serviço</a>
         {/*<a href="#" className='navItem'>Recibo</a>
          <a href="/cadastroServico" className='navItem'>Serviço</a>
        <a href="#" className='navItem'>Relatório</a>

  
        {/* Campo de busca no lado direito */}
        <div className='buscaContainer'>
  <input
    type="text"
    value={cpfBusca}
    onChange={(e) => setCpfBusca(e.target.value)}
    placeholder="Buscar agricultor(a) pelo CPF"
    className='inputBusca'
  />
  <button onClick={handleBuscaCpf} className='buttonBusca'>
    <FontAwesomeIcon icon={faSearch} />
  </button>
</div>

</nav>

      {/* Container do formulário */}
      <div className='formContainer'>
        <h1 className='titulo'>Cadastrar Agricultor(a)</h1>
        
        {/* Nome Completo */}
        <div className='formField'>
          <label htmlFor="nomeCompleto" className='label'>Nome Completo</label>
          <input
            type="text"
            id="nomeCompleto"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            className='input'
            placeholder="Digite o nome completo"
          />
        </div>

        {/* Apelido e Telefone na mesma linha */}
        <div className='formFieldRow'>
          {/* Apelido */}
          <div className='formField'>
            <label htmlFor="apelido" className='label'>Apelido</label>
            <input
              type="text"
              id="apelido"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
              className='input'
              placeholder="Digite o apelido"
            />
          </div>

          {/* Telefone */}
          <div className='formField'>
            <label htmlFor="telefone" className='label'>Telefone</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className='input'
              placeholder="Digite o telefone"
            />
          </div>
        </div>

        {/* RG e CPF na mesma linha */}
        <div className='formFieldRow'>
          {/* RG */}
          <div className='formField'>
            <label htmlFor="rg" className='label'>RG</label>
            <input
              type="text"
              id="rg"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              className='input'
              placeholder="Digite o RG"
            />
          </div>

          {/* CPF */}
          <div className='formField'>
            <label htmlFor="cpf" className='label'>CPF</label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className='input'
              placeholder="Digite o CPF"
            />
          </div>
        </div>

        {/* Rua e Número */}
        <div className='formFieldRow ruaNumeroRow'> 
          {/* Campo de Rua */}
          <div className='formField'>
            <label htmlFor="logradouro" className='label'>Rua</label>
            <input
              type="text"
              id="logradouro"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              className='input'
              placeholder="Digite a rua"
            />
          </div>

          {/* Campo de Número */}
          <div className='formField'>
            <label htmlFor="numero" className='label'>Número</label>
            <input
              type="text"
              id="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              className='input'
              placeholder="Digite o número"
            />
          </div>
        </div>

        {/* Bairro, CEP e DAP/CAF */}
        <div className='formFieldRow'>
          <div className='formField'>
            <label htmlFor="bairro" className='label'>Bairro</label>
            <input
              type="text"
              id="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className='input'
              placeholder="Digite o bairro"
            />
          </div>

          <div className='formField'>
            <label htmlFor="cep" className='label'>CEP</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className='input'
              placeholder="Digite o CEP"
            />
          </div>
          
          {/* DAP/CAF */}
          <div className='formField'>
            <label htmlFor="dapCaf" className='label'>DAP/CAF</label>
            <input
              type="text"
              id="dapCaf"
              value={dapCaf}
              onChange={(e) => setDapCaf(e.target.value)}
              className='input'
              placeholder="Digite o DAP/CAF"
            />
          </div>
        </div>
        
        {/* Botões de Ação */}
        <div className='formActions'>
        <a href="/cadastroDadosBancarios" className="">Clique aqui para incluir os dados bancários</a>
        </div>
      </div>
    </div>
  );
}



