import React from 'react'
import Botao from '../Formulário/componentes/Botao'

function Sucesso (props) {
    return(
        <div className='pagina' >
            <h2>
                Cadastro Realizado com sucesso!
            </h2>
        <Botao
        mudaConteudo={props.mudaConteudo}
        pagina='formulario'
        type='button'
        >Voltar
        </Botao>
        </div>
    )
}

export default Sucesso
