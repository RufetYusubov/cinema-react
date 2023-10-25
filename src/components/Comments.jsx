import React, { Component } from 'react'
import CommentCard from './CommentCard'

export class Comments extends Component {
    render() {
        return (
            <div class="container">
                <h3 class="section_comment">Comments(30)</h3>
                <CommentCard/>
            </div>
        )
    }
}

export default Comments