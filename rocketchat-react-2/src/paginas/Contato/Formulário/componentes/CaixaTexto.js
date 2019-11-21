import React from 'react'


function CaixaTexto (props){
// console.log(props)

    function validaCampo (evento){
        const {value , name} = evento.target
        // const value = evento.target.value
        // const nome = evento.target.name
        if (props.required && evento.target.value.trim() ===  '') {
           props.onChange(name , value , 'Campo Obrigatório')
           return
        }
        if (props.minLength &&  value.length  < props.minLength) {
            props.onChange(name , value ,  `Digite pelo menos ${props.minLength} caracteres `)
            return
        }

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(props.type === 'email' && !regex.test(value)){
            props.onChange(name , value , 'Digite um email válido')
        }
        props.onChange(name, value)
        
    }

    return(

        <input 
        className="campo"
        name={props.name}
        type="texto"
        placeholder={props.placeholder}
        onChange={validaCampo}

        />

    )
}

export default CaixaTexto

