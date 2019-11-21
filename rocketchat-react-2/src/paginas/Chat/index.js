import React from 'react'
import { getMensagens } from '../../service/base'
import Mensagem from './componentes/Mensagem'
import './style.css'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            mensagens: ''
        }
    }

    componentDidMount() {
        getMensagens()
            .then(response => {
                this.setState({
                    mensagens: response.data
                })

            })
            .catch(error => {
                console.error(error);


            })
    }
    render() {

        return (

            <section className='chat'>

                <h2>Mensagens</h2>
                {this.state.mensagens.length > 0 ?
                this.state.mensagens.map(mensagem => {
                    return <Mensagem mensagem={mensagem} key={mensagem.id} />
                })
                : <span>Carregando Mensagen :D</span>
            }
            </section>

        )
    }
}


export default Chat 

// Hoocks

// import React, { useState, useEffect } from 'react'
// import Mensagem from '../../componentes/Mensagem'
// import { getMensagens } from '../../service/mensagens'
// // Importe de estilo
// import './styles.css'

// function Chat () {
//   const [mensagens, setMensagens] = useState(undefined)

//   function handleStatusChange (mensagens) {
//     setMensagens(mensagens)
//   }

//   useEffect(() => {
//     setTimeout(
//       getMensagens()
//         .then(response => {
//           handleStatusChange(response.data)
//         })
//         .catch(error => {
//           console.error(error)
//         }),
//       5000
//     )
//   })

//   return (
//     <div className='chat'>
//       {mensagens ? (
//         mensagens.map((item, index) => (
//           <Mensagem mensagem={item} key={index + 'mensagem'} />
//         ))
//       ) : (
//         <span>Carregando mensagens :D</span>
//       )}
//     </div>
//   )
// }

// export default Chat