import React from 'react'
import Title from '../../Title/Title';

export default function Question({ children, title }) {
    return (
        <>
            <Title title={title} />
            {children}
        </>
    )
}
