import React, { Component } from 'react'
import  Actor1 from "../images/Ellipse 10.png";
import  Actor2 from "../images/Ellipse 11.png";
import  Actor3 from "../images/Ellipse 12.png";
import  Actor4  from "../images/Ellipse 18.png";
import  Actor5  from "../images/Ellipse 19.png";

export class MiddlePart1 extends Component {
    render() {
        return (
            <div class="middle_part1">
                <h2 class="cast">CAST</h2>
                <div class="actor_about">
                    <div class="actor_profile">
                        <img src={Actor1} alt="" />
                    </div>
                    <div class="actor_name">
                        <h3>Zoë Kravitz</h3>
                        <p>as Angela Childs</p>
                    </div>
                </div>
                {/* <div class="actor_about">
                    <div class="actor_profile">
                        <img src={Actor2} alt="" />
                    </div>
                    <div class="actor_name">
                        <h3>Byron Bowers</h3>
                        <p>as Terry Hughes</p>
                    </div>
                </div>
                <div class="actor_about">
                    <div class="actor_profile">
                        <img src={Actor3} alt="" />
                    </div>
                    <div class="actor_name">
                        <h3>Rita Wilson</h3>
                        <p>as Natalie Chowdhury</p>
                    </div>
                </div>
                <div class="actor_about">
                    <div class="actor_profile">
                        <img src={Actor4} alt="" />
                    </div>
                    <div class="actor_name">
                        <h3>Sarai Koo</h3>
                        <p>as Jessica Hasling</p>
                    </div>
                </div>
                <div class="actor_about">
                    <div class="actor_profile">
                        <img src={Actor5} alt="" />
                    </div>
                    <div class="actor_name">
                        <h3>Jaime Camil</h3>
                        <p>as Antonio Rivas</p>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default MiddlePart1