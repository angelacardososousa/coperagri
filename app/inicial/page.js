'use client';

import Image from 'next/image';
import CornFieldImg from '@/app/imagens/plantacaoMilhoNova.png';
import LogoImg from '@/app/imagens/logoCompletaFundoTransparenteNova.png'; // Imagem do logo
import Link from 'next/link';
import './inicial.css';
import Rodape from '../rodape/rodape'; // Importando o rodapé
import Login from '@/app/formularioLogin/page.js';

export default function Page() {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        {/* Imagem de fundo */}
        <Image
          src={CornFieldImg}
          alt="Imagem da plantação de milho"
          layout="fill"
          objectFit="cover"
          className="headerImage"
        />

        {/* Imagem do logo sobreposta */}
        <div className="logoContainer">
          <Image
            src={LogoImg}
            alt="Logo completa fundo transparente"
            width={300}
            height={300}
            className="logoImage"
          />
        </div>

        {/* Botão de Login no Header */}
        <div className="loginButton">
  <Link className="loginLink" href="/formularioLogin">
    <i className="fa-solid fa-user-circle"></i> Fazer Login
  </Link>
  /
  <Link className="loginEntrar" href="/formularioCadastro">
    <i className="fa-solid fa-user-circle"></i> Cadastre-se
  </Link>
</div>

      </header>

      {/* Conteúdo principal */}
      <div className="gridContainer">
        <div className="quadrante">
          <h2 className="tituloVerde">História</h2>
          <p className="textoVerde">
          A Cooperagri Tec Logística nasceu para inovar a logística da agricultura familiar, criando soluções que otimizam processos, aumentam a competitividade e promovem o desenvolvimento sustentável.          </p>
        </div>

        <div className="quadrante">
          <h2 className="tituloVerde">Missão</h2>
          <p className="textoVerde">
            Desenvolver e implementar soluções tecnológicas inovadoras para a logística da agricultura familiar,
            promovendo sustentabilidade, crescimento econômico e inclusão social.
          </p>
        </div>

        <div className="quadrante">
          <h2 className="tituloVerde">Visão</h2>
          <p className="textoVerde">
            Ser referência em tecnologia logística para a agricultura familiar, contribuindo para erradicar a fome,
            reduzir desigualdades e fortalecer a economia local.
          </p>
        </div>

        <div className="quadrante">
          <h2 className="tituloVerde">Valores</h2>
          <p className="textoVerde">
            Compromisso com a sustentabilidade, equidade no mercado, inovação tecnológica, apoio ao desenvolvimento local
            e uso responsável dos recursos naturais.
          </p>
        </div>
      </div>

      {/* Rodapé */}
      <Rodape />
    </div>
  );
}



