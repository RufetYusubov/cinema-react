import React, { Component } from 'react'
import KimiPoster from  "../images/kimi-movie-poster-md 1.png"

export class MoviePart1 extends Component {
    render() {
        return (     
                <div class="movie_part1">
                    <img src={KimiPoster} alt=""/>
                        <div class="movie_type">
                            <p>Crime,Drama</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="#8B8B8B" />
                            </svg>
                            <p>1h 29 min</p>
                        </div>
                        <div class="movie_rating">
                            <p>Movie</p>
                            <svg class="hd" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                viewBox="0 0 35 35" fill="none">
                                <path
                                    d="M30.625 6.5625H4.375C3.79484 6.5625 3.23844 6.79297 2.8282 7.2032C2.41797 7.61344 2.1875 8.16984 2.1875 8.75V26.25C2.1875 26.8302 2.41797 27.3866 2.8282 27.7968C3.23844 28.207 3.79484 28.4375 4.375 28.4375H30.625C31.2052 28.4375 31.7616 28.207 32.1718 27.7968C32.582 27.3866 32.8125 26.8302 32.8125 26.25V8.75C32.8125 8.16984 32.582 7.61344 32.1718 7.2032C31.7616 6.79297 31.2052 6.5625 30.625 6.5625ZM4.375 26.25V8.75H30.625V26.25H4.375Z"
                                    fill="#8B8B8B" />
                                <path
                                    d="M24.0625 12.0312H19.6875V22.9688H24.0625C24.9327 22.9688 25.7673 22.623 26.3827 22.0077C26.998 21.3923 27.3438 20.5577 27.3438 19.6875V15.3125C27.3438 14.4423 26.998 13.6077 26.3827 12.9923C25.7673 12.377 24.9327 12.0312 24.0625 12.0312ZM25.1562 19.6875C25.1562 19.9776 25.041 20.2558 24.8359 20.4609C24.6308 20.666 24.3526 20.7812 24.0625 20.7812H21.875V14.2188H24.0625C24.3526 14.2188 24.6308 14.334 24.8359 14.5391C25.041 14.7442 25.1562 15.0224 25.1562 15.3125V19.6875Z"
                                    fill="#8B8B8B" />
                                <path
                                    d="M14.2188 12.0312V16.4062H10.9375V12.0312H8.75V22.9688H10.9375V18.5938H14.2188V22.9688H16.4062V12.0312H14.2188Z"
                                    fill="#8B8B8B" />
                            </svg>
                            <svg class="point" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6"
                                fill="none">
                                <circle cx="3" cy="3" r="3" fill="#8B8B8B" />
                            </svg>
                            <p>Imdb: 6.3/10</p>
                        </div>
                </div>       
        )
  }
}

                export default MoviePart1