import React, { Component } from 'react'
import { imgPath } from '../Main_Api'

export class SliderInnerCard extends Component {
    render() {
        const { data } = this.props
        return (
            <div class="slider_card">
                <img src={imgPath+data.poster_path} alt="" />
                <p>{data.title}</p>
                <button>New</button>
            </div>
        )
    }
}

export default SliderInnerCard