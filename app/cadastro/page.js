'use client';

import Image from 'next/image'; // Importar o componente Image do Next.js
import './cadastro.css';
import LogoImg from '@/app/imagens/logoCompletaFundoTransparenteNova.png'; // Imagem do logo
import Rodape from '../rodape/rodape'; // Importando o rodapé

export default function Page() {
  return (
    <div className="container">
      {/* Imagem acima da barra de navegação */}
      <div className="logoContainer">
        <Image
          src={LogoImg}
          alt="Logo completa fundo transparente"
          width={300}
          height={300}
          className="logoImage"
        />
      </div>

      {/* Barra de navegação */}
      <nav className="navbar">
      </nav>
    
      {/* Botões de ação */}
        <div className="buttonContainer">
          <a href="/fornecedor">
            <button className="button buttonLightGreen">Agricultor(a)</button>
          </a>
          <a href="/cadastroDadosBancarios">
            <button className="button buttonLightGreen">Dados Bancários</button>
          </a>
          <a href="/cadastroProduto">
            <button className="button buttonGreen">Produto</button>
          </a>
          <a href="/cadastroServico">
            <button className="button buttonGreen">Serviço</button>
          </a>
          <a href="/cadastroFornecimento">
            <button className="button buttonDarkGreen">Fornecimento de Produto</button>
          </a>
          <a href="cadastroPrestacao">
            <button className="button buttonDarkGreen">Prestação de Serviço</button>
          </a>
          <a href="">
            <button className="button buttonLightGreen">Recibo</button>
          </a>
          <a href="">
            <button className="button buttonLightGreen">Relatório</button>
          </a>

      </div>
      <br></br>
      <div>
        {/* Rodapé */}
          <Rodape />
      </div>
    </div>
  );
}






