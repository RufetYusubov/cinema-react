import React, { Component } from 'react'
import EntranceMain from '../components/EntranceMain'
import Logo from '../components/Logo'

export class Entrance extends Component {
//   componentDidMount(){
//     if(!localStorage.getItem('loggedInUser')){
//       window.location.href='/entrance'
//     }
// }

  render() {
    return (
    <div class="entrance_container">
      <Logo/>
        <EntranceMain/>
    </div>
    )
  }
}

export default Entrance