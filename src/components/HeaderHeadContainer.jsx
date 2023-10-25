import React, { Component } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import HeaderIconsContainer from './HeaderIconsContainer'

export class HeaderHeadContainer extends Component {
    render() {
        return (
            <div class="header_head_container container">
                <Logo/>
                <Nav/>
                <HeaderIconsContainer/>
            </div>
        )
    }
}

export default HeaderHeadContainer