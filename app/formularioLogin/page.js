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
  const [erro, setErro] = useState(""); // Para exibir erros ao usuário

  const toggleMostrarSenha = () => setMostrarSenha(!mostrarSenha);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para autenticação
    if (!email || !senha) {
      setErro("Por favor, preencha o e-mail e a senha.");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (resposta.ok) {
        const data = await resposta.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);
        window.location.href = "/cadastro";

      } else {
        setErro("Email ou senha invalidos.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      setErro("Erro ao conectar ao servidor. Tente novamente.", error);
    }
  };

  return (
    <div className="pageContainer">
      <Image src={logo} alt="Logo CoperAgri" className="logoImage" />

      <div className="loginContainer">
        <div className="form">
          <label className="label">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Insira seu e-mail"
          />

          <label className="label">Senha</label>
          <div className="inputSenha">
            <input
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="input"
              placeholder="Insira sua senha"
            />
            <span onClick={toggleMostrarSenha} className="olho">👁️</span>
          </div>

          {/* Exibir mensagem de erro, se houver */}
          {erro && <p className="erroMensagem" color="red">{erro}</p>}

          <button onClick={handleLogin} className="entrarButton">
            Entrar
          </button>

          <Link href="/esqueci-senha" className="link">Esqueci a senha</Link>
          <Link href="/formularioCadastro" className="link">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}
