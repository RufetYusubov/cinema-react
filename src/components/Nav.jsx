import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <nav>
                <svg class="close_icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1L9 9M1 9L9 1L1 9Z" stroke="#A9A3A1" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <ul class="nav_list">
                    <li><a href="">Tv Shows</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Upcoming</a></li>
                    <li><a href="">Trailers</a></li>
                    <li><a href="">My list</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav