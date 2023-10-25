import React, { Component } from 'react'

export class HeaderMiddleContainer extends Component {
    render() {
        return (
            <div class="header_middle_container container">
                <div class="header_middle_head">
                    <h1>THE LOST CITY</h1>
                    <div class="p1">
                        <p>Action-Adventure</p>
                        <p>Comedy</p>
                        <p>Action</p>
                    </div>
                    <p class="p2">Alan, who is secretly enamored with Loretta, witnesses her kidnapping. He recruits
                        Jack Trainer, a former
                        Navy SEAL turned CIA operative, to meet him on the island and coordinate a
                        rescueattempt.Jack,
                        with no assistance from Alan.</p>
                </div>
                <div class="header_middle_icons">
                    <div class="icon1">
                        <i class="fa-regular fa-clock"></i>
                        <span>164 min.</span>
                    </div>
                    <div class="icon2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17"
                            fill="none">
                            <path
                                d="M1 13.8404H4.70807L9.78651 15.9363C10.3105 16.158 10.8949 15.7751 10.8949 15.1907V1.80935C10.8949 1.22493 10.3105 0.842027 9.78651 1.06371L4.70807 3.15957H1.08061V11.3214"
                                stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M14.3413 4.4292C15.3892 5.47713 16.0341 6.90796 16.0341 8.50002C16.0341 10.0921 15.3892 11.5431 14.3413 12.5708"
                                stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M16.7593 2.01074C18.4118 3.66325 19.4597 5.96064 19.4597 8.49987C19.4597 11.0391 18.4319 13.3365 16.7593 14.989"
                                stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>Subtitles</span>
                    </div>
                    <div class="icon3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="white" />
                        </svg>
                        <span>Imdb: 9.1/10</span>
                    </div>
                </div>
                <div class="header_end">
                    <div class="button1">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19"
                                fill="none">
                                <path
                                    d="M1.54455 18.8278L1.67587 18.7209L11.4622 10.6459C11.7936 10.3728 12 9.96313 12 9.50594C12 9.04875 11.7874 8.63906 11.4622 8.36594L1.69463 0.296875L1.53205 0.160312C1.37572 0.0593748 1.18812 0 0.988015 0C0.443981 0 0 0.439375 0 0.985625V18.0144C0 18.5606 0.443981 19 0.988015 19C1.19437 19 1.38822 18.9347 1.54455 18.8278Z"
                                    fill="white" />
                            </svg>
                            <span>Watch Now</span>
                        </button>
                    </div>
                    <div class="button2">
                        <button class="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                fill="none">
                                <path d="M9 1V17" stroke="#C00511" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M1 9H17" stroke="#C00511" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span>Add List</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderMiddleContainer