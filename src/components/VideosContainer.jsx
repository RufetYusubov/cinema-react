import React, { Component } from 'react'
import VideoCard from './VideoCard'

export class VideosContainer extends Component {
  render() {
    const {videos}=this.props
    return (
        <div class="continue_container container">
          {
            videos.map((video,i)=>{
              return <VideoCard key={i} video={video}/>
            })
          }
        </div>
    )
  }
}

export default VideosContainer