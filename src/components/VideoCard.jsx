import React, { Component } from 'react'

export class VideoCard extends Component {
    render() {
        const {video}=this.props
        return (
            <div class="continue_card">
                <video controls src={video.video}></video>
                <p>{video.title}</p>
                <div class="icons">
                    <i class="fa-solid fa-play play_icon"></i>
                    <i class="fa-solid fa-pause pause_icon"></i>
                </div>
            </div>
        )
    }
}

export default VideoCard