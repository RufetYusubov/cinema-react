import React, { Component } from 'react'

export class SignupForm extends Component {
    state = {
        regName: '',
        regEmail: '',
        regPsw: '',
        regReTypePsw: '',
        users: JSON.parse(localStorage.getItem('istifadeciler'))||[],
        regErr: ''
    }

    regNameFunc(e) {
        this.setState({
            regName: e.target.value
        })
    }
    regEmailFunc(e) {
        this.setState({
            regEmail: e.target.value
        })
    }

    regPswFunc(e) {
        this.setState({
            regPsw: e.target.value
        })
    }

    regReTypePswFunc(e) {
        this.setState({
            regReTypePsw: e.target.value
        })
    }


    regSubmit(e) {
        e.preventDefault()

        let checkNewUser = this.state.users.find(data => data.email === this.state.regEmail)
        if (checkNewUser) {
            this.setState({
                regErr: 'Bu istifadeci movcuddur'
            })
        } else {
            if(this.state.regReTypePsw===this.state.regPsw){
                let newUser = {
                    id: this.state.users.length + 1,
                    name: this.state.regName,
                    email: this.state.regEmail,
                    password: this.state.regPsw
                }
                this.state.users.push(newUser)
                this.setState({
                    regErr: 'Qeydiyyat ugurla bitdi'
                })
                localStorage.setItem('istifadeciler',JSON.stringify(this.state.users))
            }else{
                this.setState({
                    regErr: 'Sifreler ayni deyil'
                }) 
            }
            
        }

    }


    render() {
        const { regName, regEmail, regPsw, regReTypePsw, regErr } = this.state
        return (


            <form onSubmit={this.regSubmit.bind(this)}>
                <div class="form_inputs_container">
                    <div class="inputs_container">
                        <label for="log_name">Name</label>
                        <input value={regName} onChange={this.regNameFunc.bind(this)} required class="reg_name" id="log_name" type="text" placeholder="sitiago" />
                    </div>
                    <div class="inputs_container">
                        <label for="log_email">Email</label>
                        <input value={regEmail} onChange={this.regEmailFunc.bind(this)} required class="reg_email" id="log_email" type="email" placeholder="sitiago@gmail.com" />
                    </div>
                    <p class="reg_email_err"></p>
                    <div class="inputs_container">
                        <label for="log_psw">Password</label>
                        <input value={regPsw} onChange={this.regPswFunc.bind(this)} required class="reg_psw" id="log_psw" type="password" placeholder=". . . . . . ." />
                    </div>
                    <p class="reg_psw_err"></p>
                    <div class="inputs_container">
                        <label for="log_reType_psw">Re-type Password</label>
                        <input value={regReTypePsw} onChange={this.regReTypePswFunc.bind(this)} required class="reg_reType_psw" id="log_reType_psw" type="password"
                            placeholder=". . . . . . ." />
                    </div>
                </div>
                <p class="reg_err">{regErr}</p>

                <div class="login_btn_container">
                    <button class="signUp_btn">Sign up</button>
                </div>
            </form>


        )
    }
}

export default SignupForm