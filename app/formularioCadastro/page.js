'use client';

import { useState } from "react";
import Image from "next/image";
import logo from "@/app/imagens/logoMilhoNomeTransparente-Photoroom.png"; // Caminho da imagem
import Link from 'next/link'; // Importando o Link

import "./formularioCadastro.css";

export default function FormularioCadastro() {

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState(""); // Para exibir erros ao usuário

  const toggleMostrarSenha = () => setMostrarSenha(!mostrarSenha);
  const toggleMostrarConfirmarSenha = () => setMostrarConfirmarSenha(!mostrarConfirmarSenha);

  const FunCadastro = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem!");
      return; // Para interromper o envio
    }

    const cadastrarData = {
        nome: nome,
        senha: senha,
        email: email
    };

    try {
        const response = await fetch('http://localhost:8080/users/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cadastrarData),
        });

        // Verifica se o cadastro foi bem-sucedido
        if (response.ok) {
          window.location.href = "/formularioLogin";
        } else {
            setErro("Cadastro falhou. Verifique suas credenciais.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        setErro("Ocorreu um erro ao tentar realizar o cadastro.");
    }
}

  return (
    <div className="pageContainer">
      {/* Imagem logo */}
      <Image src={logo} alt="Logo CoperAgri" className="logoImage" />

      <div className="cadastroContainer">
        <form className="form" onSubmit={FunCadastro}>
          <label className="label">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input"
            placeholder="Digite seu nome"
          />

          <label className="label">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Digite seu e-mail"
          />

          <label className="label">Senha</label>
          <div className="inputSenha">
            <input
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="input"
              placeholder="Digite sua senha"
            />
            <span onClick={toggleMostrarSenha} className="olho">
              👁️
            </span>
          </div>

          <label className="label">Confirmar Senha</label>
          <div className="inputSenha">
            <input
              type={mostrarConfirmarSenha ? "text" : "password"}
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="input"
              placeholder="Confirme sua senha"
            />
            <span onClick={toggleMostrarConfirmarSenha} className="olho">
              👁️
            </span>
          </div>

          {/* Exibir mensagem de erro, se houver */}
          {erro && <p className="erroMensagem">{erro}</p>}

          <button type="submit" className="cadastrarButton">Cadastrar</button>

          {/* Frase "Já tenho conta" com redirecionamento para o login */}
          <Link href="/formularioLogin">
            <button type="button" className="cadastrarButton">Já tenho conta</button>
          </Link>

        </form>
      </div>
    </div>
  );
}
