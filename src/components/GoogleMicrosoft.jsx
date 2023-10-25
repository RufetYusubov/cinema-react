import React, { Component } from 'react'
import Google from "../images/36c3e723-bfa0-4b28-8c26-5a07650be418.png"
import AppStore from "../images/280ae31b-5ec7-46e0-ba15-8fb88eac4bc9.png"

export class GoogleMicrosoft extends Component {
  render() {
    return (
        <div class="google_play">
            <img src={Google} alt=""/>
            <img src={AppStore} alt=""/>
        </div>
    )
  }
}

export default GoogleMicrosoft