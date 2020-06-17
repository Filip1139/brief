import React from 'react'
import styles from './Steps.module.scss'

export default function Steps() {
    return (
        <div className={styles.steps}>
            <div className="brief__step brief__step--1">
                <p className="brief__step-title t-muted">Personal information</p>
            </div>
            <div className="brief__step brief__step--2">
                <p className="brief__step-title t-muted">Payment methods</p>
            </div>

            <div className="brief__step brief__step--3">
                <p className="brief__step-title t-muted">Summary</p>
            </div>

        </div>
    )
}
