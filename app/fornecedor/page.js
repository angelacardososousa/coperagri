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
  const [cidade, setCidade] = useState('');
  const [dapCaf, setDapCaf] = useState('');
  const [banco, setBanco] = useState('');
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [pix, setPix] = useState('');
  const [numeroConta, setNumeroConta] = useState('');
  const [arquivo, setArquivo] = useState(null);
  const [showBancarioForm, setShowBancarioForm] = useState(false); // Controla a visibilidade do formulário bancário
  const [showCadastroForm, setShowCadastroForm] = useState(true); // Controla a visibilidade do formulário de cadastro

  const handleBuscaCpf = () => {
    console.log('Buscando agricultor(a) com CPF:', cpfBusca);
    setCpfBusca('');
  };



  const handleConfirmar = () => {
    // Lógica para confirmar o cadastro
    const cadastroData = {
      "id": 0,
      "nome": nomeCompleto,
      "cpf": cpf,
      "rg": rg,
      "telefone": telefone,
      "endereco": {
        "id": 0,
        "rua": logradouro,
        "numero": numero,
        "bairro": bairro,
        "cidade": cidade,
        "cep": cep
      },
      "dadosBancarios": {
        "id": 0,
        "agencia": agencia,
        "conta": numeroConta,
        "tipo_conta": conta,
        "pix": pix,
        "bancoCode": banco
      },
      "caf_dap": dapCaf,
      "apelido": apelido,
      "userId": 0
    };
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
    setCidade('');
    setDapCaf('');
    setBanco('');
    setAgencia('');
    setConta('');
    setPix('');
    setNumeroConta('');

  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
    if (file) {
      setArquivo(file);
    }
  };

  const handleRemoveFile = () => {
    setArquivo(null); // Reseta o estado
    document.getElementById("arquivoBanco").value = ""; // Reseta o input
  };



  return (
    <div className='container'>
      <nav className='navbar'>
        <a href="/cadastro" className='navItem'>Home</a>
        <a href="/cadastroProduto" className='navItem'>Produto</a>
        <a href="/cadastroFornecimento" className='navItem'>Fornecimento de Produto</a>
        <a href="cadastroPrestacao" className='navItem'>Prestação de Serviço</a>

        {/* Campo de busca no lado direito */}
        <div className='buscaContainer'>
          <input
            type="number"
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

      <div className='formContainer'>
        <h1 className='titulo'>Cadastrar Agricultor(a)</h1>

        {/* Exibir formulário de Cadastro ou Bancário dependendo do estado */}
        {showCadastroForm && (
          <>
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
                  type="number"
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
                  type="number"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className='input'
                  placeholder="Digite o CPF"
                />
              </div>
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

            {/* Bairro, CEP e Cidade */}
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
                <label htmlFor="dapCaf" className='label'>Cidade</label>
                <input
                  type="text"
                  id="dapCaf"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className='input'
                  placeholder="Digite a cidade"
                />
              </div>

              <div className='formField'>
                <label htmlFor="cep" className='label'>CEP</label>
                <input
                  type="number"
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className='input'
                  placeholder="Digite o CEP"
                />
              </div>
            </div>

            {/* Botão para mostrar o formulário bancário */}
            <div className='formActions'>
              <button
                className="button"
                onClick={() => { setShowBancarioForm(true); setShowCadastroForm(false); }}
              >
                Incluir Dados Bancários
              </button>
              <button className="button buttonCorrigir" onClick={handleCorrigir}>Limpar Formulário</button>
            </div>
          </>
        )}

        {/* Formulário Bancário */}
        {showBancarioForm && (
          <div className="formBancario">
            <div className="formField">
              <label htmlFor="banco" className="label">Banco</label>
              <select
                id="banco"
                value={banco}
                onChange={(e) => setBanco(e.target.value)}
                className="input"
              >
                <option value="" disabled hidden>Escolha o Banco</option>
                <option value="Banco do Brasil">Banco do Brasil-001</option>
                <option value="Itaú Unibanco">Itaú Unibanco-341</option>
                <option value="Bradesco">Bradesco-237</option>
                <option value="Caixa Econômica Federal">Caixa Econômica Federal-104</option>
                <option value="Nubank">Nubank-260</option>
                <option value="Inter">Inter-077</option>
                <option value="Outro">Outro</option>
              </select>

              <input
                type="number"
                id="quantidade"
                value={agencia}
                onChange={(e) => setAgencia(e.target.value)}
                className="input"
                placeholder="Agência"
              />
              <select
                id="conta"
                value={conta}
                onChange={(e) => setConta(e.target.value)}
                className="input"
              >
                <option value="" disabled hidden>Selecione a Conta</option>
                <option value="corrente">Corrente</option>
                <option value="poupanca">Poupança</option>
              </select>
            </div>

            <div className="formField valorContainer">
              <div className="valorUnitarioField">
                <label htmlFor="valorUnitario" className="label"></label>
                <input
                  type="number"
                  id="valorUnitario"
                  value={numeroConta}
                  onChange={(e) => setNumeroConta(e.target.value)}
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
                  value={pix}
                  onChange={(e) => setPix(e.target.value)}
                  className="input"
                  placeholder="chave pix"
                  inputMode="numeric"
                  pattern="\d"
                />
              </div>
            </div>

            {/* Upload de Documento Bancário */}
            <div className="formField">
              <label htmlFor="arquivoBanco" className="label">Anexar documento da Conta</label>
              <br />
              <label
                htmlFor="arquivoBanco"
                className="botao-label"
              >
                Escolher arquivo
              </label>

              <input
                type="file"
                id="arquivoBanco"
                onChange={handleFileChange}
                hidden
              />

              {arquivo && (
                <div className="file-container">
                  <span className="file-name">{arquivo.name}</span>
                  <button
                    onClick={handleRemoveFile}
                    className="remove-button"
                  >
                    ✖
                  </button>
                </div>
              )}
            </div>

            <div className="formActions">
              <button className="button" onClick={handleConfirmar}>Confirmar</button>
              <button className="button buttonCorrigir" onClick={handleCorrigir}>Limpar Formulário</button>
              <button
                className="button buttonVoltar"
                onClick={() => { setShowCadastroForm(true); setShowBancarioForm(false); }}
              >
                Voltar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
