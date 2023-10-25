import React, { Component } from 'react'

export class GoRegister extends Component {

    goSignUp(){
        window.location.href='/signup'
    }
    render() {
        return (
            <div class="login_btn_container go_reg_btn_container">
                <button onClick={this.goSignUp.bind(this)} class="signUp_btn">Go Register</button>
            </div>
        )
    }
}

export default GoRegister