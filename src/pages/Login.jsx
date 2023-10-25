import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import GoRegister from '../components/GoRegister'

export class Login extends Component {

//   componentDidMount(){
//     if(!localStorage.getItem('loggedInUser')){
//       window.location.href='/login'
//     }
// }

  render() {
    return (
      <>
        <div class="login_container">
          <h1>LOGİN</h1>
          <LoginForm />
          <GoRegister />
        </div>
      </>
    )
  }
}

export default Login