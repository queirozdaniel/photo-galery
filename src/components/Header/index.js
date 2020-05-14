import React from 'react'
import { Link } from 'gatsby'
import style from './style.module.css'

const Header = ({ title = 'Galeria de Imagens' }) => {
    return (
        <div>
            <h1 className={style.title}>{title}</h1>
            <Link to='/'>
                <p className={style.subTitle}>Setups inspiradores!</p>
            </Link>
        </div>
    )
}

export default Header
