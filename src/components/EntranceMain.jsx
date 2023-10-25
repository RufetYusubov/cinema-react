import React, { Component } from 'react'
import MovieImg from '../images/MOVIEDOM.png'

export class EntranceMain extends Component {

    goLogin(){
        window.location.href='/login'
    }

    goSignUp(){
        window.location.href='/signup'
    }


    render() {
        return (
            
                
                <div class="entrance_btns">
                    <button onClick={this.goLogin.bind(this)} class="login_btn">Login</button>
                    <button onClick={this.goSignUp.bind(this)} class="signUp_btn">Sign up</button>
                </div>
            
        )
    }
}

export default EntranceMain