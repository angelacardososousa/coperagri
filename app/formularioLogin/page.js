'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./formularioLogin.css";

// Importa a imagem de logo
import logo from "@/app/imagens/logoMilhoNomeTransparente-Photoroom.png"; // Ajuste o caminho se necessário

export default function Page() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const toggleMostrarSenha = () => setMostrarSenha(!mostrarSenha);

  return (
    <div className="pageContainer">
      <Image src={logo} alt="Logo CoperAgri" className="logoImage" />

      <div className='loginContainer'>
       
        <div className='form'>
          <label className='label'>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            placeholder="Insira seu e-mail"
          />

          <label className='label'>Senha</label>
          <div className='inputSenha'>
            <input
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className='input'
              placeholder="Insira sua senha"
            />
            <span onClick={toggleMostrarSenha} className='olho'>👁️</span>
          </div>

          <Link href="/cadastro"> {/* Substitua '/cadastro' pela rota correta */}
        <button className="entrarButton">
          Entrar
        </button>
      </Link>
          <Link href="/esqueci-senha" className='link'>Esqueci a senha</Link>
          <Link href="/formularioCadastro" className='link'>Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}












