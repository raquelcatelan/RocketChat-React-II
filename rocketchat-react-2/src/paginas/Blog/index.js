import React from 'react'
import { getPostagens } from '../../service/postagens'
import Postagem from './componentes/Postagem'
import Header from '../../componentes/Header'
import './style.css'


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            postagens: ''
        }
    }

    componentDidMount() {
        getPostagens()
            .then(response => {
                this.setState({
                    postagens: response.data
                })
            })
            .catch(error => {
                console.error(error);

            })

    }

    render() {
        return (

            <section>
            <Header classeHeader='blog-header'>

                BLOG

            </Header>

            <div className="blog-postagens">
               {this.state.postagens.length > 0 ?
               this.state.postagens.map(postagem => {
                   return <Postagem postagem={postagem} key={postagem.id}/>
               })

               : <span>Carregando Mensagen :D</span>
            } 

            </div>

            </section>

           
            
            )
            
    }
}

export default Blog