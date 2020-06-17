import React from 'react'
import InputHidden from '../InputHidden/InputHidden'
export default function Label({ id, name, title, hiddenTextInput }) {
    return (
        <label
            className="briefAnswerLabel"
            htmlFor={id}
            aria-label={name}>
            <span></span>
            <p className="briefShowAnswerText">{title}</p>
            {hiddenTextInput && <InputHidden />}

        </label>
    )
}
