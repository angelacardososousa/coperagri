'use client'
import { useState } from "react"
import Link from "next/link"

import FormCadastro from './formularioCadastro/page'
import FormLogin from './formularioLogin/page'
import Rodape from './rodape/rodape'
//import style from './login.css'

export default function Login(){
    
    const [login, setLogin] = useState(true)
    

    return(
    <div className="main">
        <Link className='btn-voltar' href='/'>&larr;</Link>
        <h1></h1>
        <div className="form">
            <div className="button-form">
                <button onClick={()=>setLogin(true)} className={login == true ? 'selecionado' : 'botao-form'}>Login</button>
                <button onClick={()=>setLogin(false)} className={login == false ? 'selecionado' : 'botao-form'}>Cadastro</button>
            </div>
            <hr/>
            {login == true ? <FormLogin/> : <FormCadastro/>}
        </div>

       {/* <Rodape className='rodape'/> */ }
    </div>
    )
}