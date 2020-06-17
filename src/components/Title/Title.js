import React from 'react'
import styles from './Title.module.scss'
export default function Title({ title }) {
    return (
        <h3 className={styles.title}>{title}</h3>
    )
}
