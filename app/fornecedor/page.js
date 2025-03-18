'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
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
  const [bancos, setBancos] = useState([]);
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [pix, setPix] = useState('');
  const [numeroConta, setNumeroConta] = useState('');
  const [erro, setErro] = useState("");
  const [arquivo, setArquivo] = useState(null);
  const [showBancarioForm, setShowBancarioForm] = useState(false); // Controla a visibilidade do formulário bancário
  const [showCadastroForm, setShowCadastroForm] = useState(true); // Controla a visibilidade do formulário de cadastro

  const handleBuscaCpf = () => {
    console.log('Buscando agricultor(a) com CPF:', cpfBusca);
    setCpfBusca('');
  };

  useEffect(() => {
    const fetchBancos = async () => {

      try {
        const response = await fetch("http://localhost:8080/fornecedor/bancos"); // 🔹 Substitua pela URL correta
        if (!response.ok) {
          throw new Error("Erro ao buscar bancos");
        }
        const data = await response.json();
        console.log(data);
        setBancos(data); // 🔹 Atualiza o estado com os bancos retornados
      } catch (error) {
        console.error("Erro ao carregar bancos:", error);
      }
    };

    fetchBancos();
  }, []);


  const temCampoVazio = (obj) => {
    return Object.values(obj).some(valor => {
      for (let chave in obj) {
        const valor = obj[chave];
        if (valor === null || valor === undefined || valor === "") {
          alert(`A propriedade "${chave}" tem um valor inválido`);
          return true;
        }
      }
      if (typeof valor === "object") return temCampoVazio(valor); // Verifica objetos aninhados
      return false;
    });
  };


  const handleConfirmar = async (e) => {
    // Lógica para confirmar o cadastro
    e.preventDefault();

    const cadastroData = {
      "nome": nomeCompleto,
      "cpf": cpf,
      "rg": rg,
      "telefone": telefone,
      "endereco": {

        "rua": logradouro,
        "numero": numero,
        "bairro": bairro,
        "cidade": cidade,
        "cep": cep
      },
      "dadosBancarios": {

        "agencia": agencia,
        "conta": numeroConta,
        "tipo_conta": conta,
        "pix": pix,
        "bancoCode": banco
      },
      "caf_dap": dapCaf,
      "apelido": apelido,
      "userId": localStorage.getItem("userId")
    }

    if (temCampoVazio(cadastroData)) {
      return;
    }

    const url = "http://localhost:8080/fornecedor/cadastrar";
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cadastroData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`A propriedade "${data.nome}" tem um valor inválido`);
      } else {
        setErro("Cadastro falhou. Verifique suas credenciais.");
      }

    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro("Ocorreu um erro ao tentar realizar o cadastro.", error);
    }
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

                {bancos.length > 0 ? (
                  bancos.map((bancoNome, index) => (
                    <option key={index} value={bancoNome}>
                      {bancoNome}
                    </option>
                  ))
                ) : (
                  <option disabled>Carregando bancos...</option>
                )}
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
