'use client';

import Image from 'next/image'; // Importar o componente Image do Next.js
import './cadastro.css';
import Rodape from '../rodape/rodape'; // Importando o rodapé
import LogoImg from '@/app/imagens/logoCompletaFundoTransparenteNova.png'; // Imagem do logo

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
        <a href="/cadastro" className="navItem">Home</a>
        <a href="/inicial" className="navItem">Contatos</a>
        <a href="#" className="navItem">Recibo</a>
      </nav>

      {/* Botões de ação */}
      <div className="buttonContainer">
        <a href="/fornecedor">
          <button className="button buttonLightGreen">Cadastrar Agricultor(a)</button>
        </a>
        <a href="/cadastroProduto">
          <button className="button buttonGreen">Cadastrar Produto</button>
        </a>
        <a href="/cadastroFornecimento">
          <button className="button buttonDarkGreen">Cadastrar Fornecimento</button>
        </a>
      </div>

      {/* Rodapé */}
      <Rodape />
    </div>
  );
}






