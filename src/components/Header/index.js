import React from 'react'
import style from './style.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={style.title}>Galeria de Imagens</h1>
            <p className={style.subTitle}> Imagens de Setups inspiradores</p>
        </div>
    )
}

export default Header
