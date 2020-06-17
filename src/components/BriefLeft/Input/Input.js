import React from 'react'
import styles from './Input.module.scss'
import PropTypes from 'prop-types'

import Label from './Label/Label'



export default class Input extends React.Component {
    state = {
        checked: false
    }
    handleOnClick = (e) => {
        // this.props.handleOnChange(e)


    }
    handleChange = () => {
        this.setState({ checked: !this.state.checked });
        console.log(this.state)
    }

    render() {

        const { type, name, id, hiddenTextInput, title, value } = this.props;
        return (
            <>
                <input
                    type={type}
                    className={styles.briefAnswer}
                    name={name}
                    id={id}
                    value={value}
                    onClick={this.handleOnClick}
                    onChange={this.handleChange}
                    checked={this.state.checked}
                />
                <Label
                    id={id}
                    name={name}
                    title={title}
                    hiddenTextInput={hiddenTextInput}
                />
            </>
        )
    }
}




Input.defaultProps = {
    type: 'radio',
    hiddenTextInput: false
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    hiddenTextInput: PropTypes.bool
}