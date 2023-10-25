import React, { Component } from 'react'

export class LoginForm extends Component {
    state={
        users: JSON.parse(localStorage.getItem('istifadeciler')),
        logEmail : "",
        logPsw : '',
        logErr : ""

    }

    logEmailFunc(e){
        this.setState({
            logEmail: e.target.value
        })
    }
    logPswFunc(e){
        this.setState({
            logPsw: e.target.value
        })
    }

    logSubmit(e){
        e.preventDefault()
        let checkUser = this.state.users.find(data=>data.email === this.state.logEmail)
        if(checkUser){
            if(checkUser.password===this.state.logPsw){
                window.location.href='/'
                localStorage.setItem('loggedInUser',JSON.stringify(checkUser))
            }else{
                this.setState({
                    logErr: 'Sifre yanlisdir'
                })
            }
        }else{
            this.setState({
                logErr: 'Istifadeci tapilmadi'
            })
        }
    }


    render() {
        const {logEmail,logPsw,logErr}= this.state
        return (

            <form onSubmit={this.logSubmit.bind(this)}>
                <div class="form_inputs_container">
                    <div class="inputs_container">
                        <label for="log_email">Email</label>
                        <input value={logEmail} onChange={this.logEmailFunc.bind(this)} required class="log_email" id="log_email" type="email" placeholder="sitiago@gmail.com"/>
                    </div>
                    <div class="inputs_container">
                        <label for="log_psw">Password</label>
                        <input value={logPsw} onChange={this.logPswFunc.bind(this)} required class="log_psw" id="log_psw" type="password" placeholder=". . . . . . ."/>
                    </div>
                    <a href="">Forgot password</a>
                </div>
                <p class="log_err">{logErr}</p>

                <div class="login_btn_container">
                    <button class="login_btn">Login</button>
                </div>
            </form>
      
        )
    }
}

export default LoginForm