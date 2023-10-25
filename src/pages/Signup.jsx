import React, { Component } from 'react'
import SignupForm from '../components/SignupForm'
import GoLogin from '../components/GoLogin'

export class Signup extends Component {
//   componentDidMount(){
//     if(!localStorage.getItem('loggedInUser')){
//       window.location.href='/signup'
//     }
// }

  render() {
    return (
      <div>
        <>
          <div class="login_container register_container">
            <h1>SIGN UP</h1>
            <SignupForm />
            <GoLogin />
          </div>
        </>
      </div>
    )
  }
}

export default Signup