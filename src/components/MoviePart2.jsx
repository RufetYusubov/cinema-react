import React, { Component } from 'react'

export class MoviePart2 extends Component {
  render() {
    return (
        <div class="movie_part2">
        <div class="movie_title">
            <div class="title">
                <p>SUBTITLE</p>
            </div>
            <div class="title">
                <p>DUBLAJ</p>
            </div>
            <div class="title">
                <p>CINEMA MOOD</p>
            </div>
        </div>
        <div class="movie_about">
            <p>Angela suffers from a fear of open spaces, which is exacerbated by the general lockdown,
                so she works from home. Her job is to process the erroneous responses of Kimi's trendy
                voice assistant.She reports the incident to her superior, who refers her to Natalie
                Chowdhury, an executive at Amygdala. Angela attempts to reach Chowdhury over the phone,
                but is eventually convinced to come to her office in person, with the promise that the
                FBI will be informed about the case. At the office, Angela is disturbed when Chowdhury
                seems reticent to contact the authorities and makes reference to her prior mental health
                leave... </p>
        </div>
        <div class="movie_icons">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19"
                    fill="none">
                    <path
                        d="M2.27755 18.3672L2.42469 18.263L13.3903 10.3855C13.7617 10.1191 13.9929 9.7194 13.9929 9.2734C13.9929 8.82739 13.7547 8.42773 13.3903 8.16128L2.44571 0.289613L2.26354 0.156391C2.08837 0.0579224 1.87816 0 1.65395 0C1.04436 0 0.546875 0.428627 0.546875 0.961514V17.5737C0.546875 18.1066 1.04436 18.5352 1.65395 18.5352C1.88517 18.5352 2.10238 18.4715 2.27755 18.3672Z"
                        fill="white" />
                </svg><span>Play</span>
            </button>
            <div class="movie_svg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"
                        fill="none">
                        <path
                            d="M0 12C0 18.625 5.371 24 12 24C15.184 24 18.238 22.746 20.531 20.535L18.531 18.535C16.84 20.332 14.481 21.332 12 21.332C3.68 21.332 -0.48 11.282 5.398 5.398C11.278 -0.48 21.332 3.691 21.332 12H17.332L22.664 17.332H22.797L28 12H24C24 5.375 18.625 0 12 0C5.371 0 0 5.375 0 12Z"
                            fill="white" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25"
                        fill="none">
                        <path d="M15.5 1H1.5H1L1.5 23.7514L8.5 17.6383L15.5 23.7514V1Z" fill="#C00511"
                            stroke="#C00511" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="25" viewBox="0 0 17 25"
                        fill="none">
                        <path
                            d="M16.9548 22.073H8.47754H0.000296914V25H16.9548V22.073ZM16.6739 10.3675C16.2391 9.91555 15.5338 9.91555 15.0995 10.3675L9.57691 16.1065V1.15747C9.57691 0.517879 9.07768 0 8.46303 0C7.84787 0 7.34949 0.518055 7.34949 1.15764V16.1066L1.90129 10.4454C1.4664 9.99316 0.761442 9.99316 0.326551 10.4454C-0.10885 10.8973 -0.10885 11.63 0.326551 12.0821L7.67557 19.7186C7.70103 19.7457 7.72887 19.7713 7.75722 19.7958C7.77012 19.8067 7.78353 19.8157 7.79694 19.8269C7.8129 19.8383 7.82851 19.8519 7.8443 19.8632C7.86077 19.8743 7.87689 19.8833 7.89285 19.8939C7.90779 19.9034 7.92238 19.9124 7.93783 19.9209C7.95481 19.9308 7.97161 19.9385 7.98841 19.9468C8.00488 19.9547 8.02067 19.9629 8.03645 19.9701C8.05309 19.9771 8.06972 19.9828 8.08653 19.9886C8.10418 19.9953 8.12167 20.0024 8.13949 20.0078C8.15663 20.0131 8.17293 20.017 8.18991 20.0214C8.20824 20.0255 8.22623 20.0316 8.2449 20.0352C8.26442 20.0389 8.28411 20.041 8.30363 20.0447C8.3201 20.0473 8.33623 20.0503 8.35269 20.0521C8.42568 20.0595 8.49952 20.0595 8.57251 20.0521C8.58949 20.0503 8.60494 20.0473 8.62157 20.0447C8.64092 20.041 8.66112 20.0396 8.67997 20.0352C8.69847 20.0315 8.7168 20.0255 8.73496 20.0214C8.75228 20.017 8.76874 20.0131 8.78572 20.0078C8.80354 20.0024 8.82085 19.9953 8.83868 19.9886C8.85599 19.9833 8.87178 19.9777 8.88875 19.9701C8.90505 19.9629 8.92118 19.9547 8.93679 19.9468C8.95377 19.9383 8.97057 19.9306 8.98721 19.9209C9.00265 19.9124 9.01725 19.9025 9.03202 19.8939C9.04865 19.8833 9.06478 19.8745 9.08074 19.8632C9.09703 19.8519 9.11282 19.8383 9.12844 19.8269C9.14134 19.8159 9.15492 19.8069 9.16799 19.7958C9.21025 19.7598 9.2493 19.7187 9.28579 19.6776C9.29869 19.6658 9.31193 19.6545 9.32466 19.6418L16.6737 12.0049C17.1087 11.5519 17.1087 10.8192 16.6739 10.3675Z"
                            fill="white" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19"
                        fill="none">
                        <path
                            d="M22.6553 7.12373L15.0722 0.23001C14.4977 -0.344467 13.8084 0.23001 13.8084 1.14917V4.59603C8.40829 4.59603 3.81248 7.928 1.62946 12.4089C0.825196 13.9026 0.365615 15.5111 0.0209288 17.1196C-0.208862 18.2686 1.51457 18.8431 2.20394 17.809C4.73164 13.7877 8.98277 11.1451 13.8084 11.1451V14.9366C13.8084 15.8558 14.4977 16.4303 15.0722 15.8558L22.6553 8.96206C23.1149 8.50248 23.1149 7.58331 22.6553 7.12373Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default MoviePart2