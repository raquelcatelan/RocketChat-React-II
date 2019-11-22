import React from 'react'
import './style.css'
 
// props = {
//     postagem: {
//         title: blablba,
//         body: blçabala
//     }
// }

export default function Postagem (props) {
    return(

        <div className='postagem' >
           
    <h2>{props.postagem.title}</h2>
    <p>{props.postagem.body}</p>
           <button className='botao'>Saiba mais </button>

        </div>

    )
}