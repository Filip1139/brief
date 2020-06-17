import React from 'react'
import styles from './BriefLeft.module.scss'
import Steps from './Steps/Steps'
import Question from './Question/Question'
import Input from './Input/Input'
import { v4 as uuidv4 } from 'uuid';
// import InputHidden from './Input/InputHidden/InputHidden'
import checkboxes from '../../questions/questins-first-step'



export default class BriefLeft extends React.Component {

    render() {
        const allQuestions = checkboxes.map(item => {
            return (
                <Question key={uuidv4()} title={item.title}>
                    {item.qustions.map(({ name, hiddenTextInput, id, title, value }) => {
                        return (
                            <Input
                                key={uuidv4()}
                                name={name}
                                id={id}
                                title={title}
                                value={value}
                                hiddenTextInput={hiddenTextInput}
                                handleOnChange={this.props.handleOnChange}
                            />)
                    })}
                </Question>
            )
        })
        return (
            <div>
                <div className={styles.BriefLeft}>
                    <Steps />
                    <form>
                        {allQuestions}
                    </form>

                </div>
            </div>
        )
    }
}
