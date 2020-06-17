import React, { Component } from 'react'
import styles from './App.scss'
import '../assets/style/colors.css'
import BriefLeft from './BriefLeft/BriefLeft'
import BriefRight from './BriefRight/BriefRight'
import Header from './Header/Header'

export default class App extends Component {
    state = {
        answers: {}
    }
    handleOnChange = (e) => {

        this.setState({
            answers: e.target.value
        })

    }
    render() {
        return (
            <>
                <Header />
                <div className="pageWrapper">
                    <BriefLeft handleOnChange={this.handleOnChange} />
                    <BriefRight />
                </div>
            </>
        )
    }
}
