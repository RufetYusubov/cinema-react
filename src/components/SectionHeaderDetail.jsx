import React, { Component } from 'react'
import MoviePart1 from './MoviePart1'
import MoviePart2 from './MoviePart2'

export class SectionHeaderDetail extends Component {
  render() {
    return (
        <div class="container">
            <h1 class="section_header1">Kimi (HBO Max)</h1>
            <div class="movie_full">
                <MoviePart1/>
                <MoviePart2/>
            </div>
        </div>
    )
  }
}

export default SectionHeaderDetail