import React from 'react'
import Menu from './Menu/index'
import './style.css'
import Logo from '../../imagens/RocketChat.png'

function Nav ()
{
return(

    <nav className='navbar'>
<img src={Logo} alt='Logotipo do Rocketchat'
className='navbar-logo'/>

<Menu/>
    </nav>

)

}

export default Nav