import React from 'react'

export default function InputHidden({ name, ...props }) {
    { console.log(props) }
    return (
        <input type="url" className='brief__answer--normal-text' name={name} id={`hidden-${name}`} placeholder="https://nazwa-strony.pl" value="sdadsad" />
    )
}
