import React from 'react'
import './style.css'

function Header (props){
    return(
<section  className={props.classeHeader}>
    <h1>
        {props.children}
    </h1>
</section>

    )
}

export default Header