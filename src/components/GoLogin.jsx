import React, { Component } from 'react'

export class GoLogin extends Component {

    goLogin(){
        window.location.href='/login'
    }
    render() {
        return (
            <div class="login_btn_container go_reg_btn_container">
                <button onClick={this.goLogin.bind(this)} class="login_btn">Go Login</button>
            </div>

        )
    }
}

export default GoLogin