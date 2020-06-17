import React from 'react'
import styles from './Header.module.scss'
// import logo from '../../assets/logo.svg'
export default function Header() {
    return (
        <header className={styles.header}>
            {/* <img className={styles.logo} src={logo} alt="Prograffing logo" /> */}
            <div className="brief__help">
                <p className="t-p">Potrzebujesz pomocy?
                        <span>Zadzwoń do eksperta</span>
                    <a href="tel:+48884901007">+48 884 901 007</a>

                </p>
            </div>
        </header>
    )
}
