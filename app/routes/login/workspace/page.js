'use client'

import {useState} from 'react'

import Rodape from "../../../rodape/rodape"
import PagInicial from '../../../../.next/server/app/pagina-inicial/pagina-inicial'
import Cabecalho from '../../../header/cabecalho'

export default function Poslogin(){
    
    const [component, setComponent] = useState('')

    return(
        <>
         <div>
            <Cabecalho/>
         </div>

        <div>
            <PagInicial/>
        </div>

        <Rodape/>
        </>
    )
}