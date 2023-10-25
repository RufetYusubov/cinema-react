import React, { Component } from 'react'

export class SectionHeader extends Component {
  render() {
    const {sectionHeader}=this.props
    return (
        <div class="container">
            <h2 class="section_header">{sectionHeader}</h2>
            <button class="view_all">View all</button>
        </div>
    )
  }
}

export default SectionHeader