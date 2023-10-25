import React, { Component } from 'react'
import CommentImg from "../images/Ellipse 13.png"

export class CommentCard extends Component {
  render() {
    return (
      <div class="comment">
        <div class="comment_user_img">
          <img src={CommentImg} alt=""/>
        </div>
        <div class="comment_card">
          <div class="comment_user">
            <h5>Kukkiriza Emmanuel</h5>
            <p>4 months ago</p>
          </div>
          <div class="comment_title">
            <p>Love Zoe and I'm happy to have more of her this year</p>
          </div>
        </div>
      </div>
      
    )
  }
}

export default CommentCard