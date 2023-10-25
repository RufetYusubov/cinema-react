import React, { Component } from 'react'
import HeaderHeadContainer from '../components/HeaderHeadContainer'
import HeaderMiddleContainer from '../components/HeaderMiddleContainer'
import SectionHeader from '../components/SectionHeader'
import VideosContainer from '../components/VideosContainer'
import SliderCard from '../components/SliderCard'
import LoadMore from '../components/LoadMore'
import Logo from '../components/Logo'
import Navlist from '../components/Navlist'
import FooterIcons from '../components/FooterIcons'
import GoogleMicrosoft from '../components/GoogleMicrosoft'
import LoadMoreEnd from '../components/LoadMoreEnd'
import { getActionAdventure, getBestComedies, getPopularMovie, getVideos } from '../config/MainConfig'

export class Main extends Component {

//   componentDidMount(){
//     if(localStorage.getItem('loggedInUser')){
//       window.location.href='/'
//     }
// }
    
    state={
        videos: [],
        popularMovie: [],
        bestComedi : [],
        actionAdventure : []
    }

    componentDidMount(){
        getVideos()
        .then(data=>{
            console.log(data);
            this.setState({
                videos: data
            })
        })


        getPopularMovie()
        .then(data=>{
            console.log(data);
            this.setState({
                popularMovie: data
            })
        })


        getBestComedies()
        .then(data=>{
            console.log(data);
            this.setState({
                bestComedi : data
            })
        })

        getActionAdventure()
        .then(data=>{
            console.log(data);
            this.setState({
                actionAdventure : data
            })
        })
    }

    render() {
        const {videos,popularMovie,bestComedi,actionAdventure}=this.state
        return (
            <>
                <header>
                    <div class="header_background_img">
                        <div class="bg_shadow">
                            <HeaderHeadContainer/>
                            <HeaderMiddleContainer/>
                        </div>
                    </div>
                </header>
                <main>
                    <section>
                        <SectionHeader sectionHeader='Continue Watching'/>
                        <VideosContainer videos={videos}/>
                    </section>
                    <section>
                        <SectionHeader sectionHeader='Popular Movies 2023'/>
                        <SliderCard sliderArr={popularMovie}/>
                        <LoadMore/>
                    </section>
                    <section>
                        <SectionHeader sectionHeader='Best Comedies'/>
                        <SliderCard sliderArr={bestComedi}/>
                        <LoadMore/>
                    </section>
                    <section>
                        <SectionHeader sectionHeader='Action & Adventure'/>
                        <SliderCard sliderArr={actionAdventure}/>
                        <LoadMoreEnd/>
                    </section>
                    
                </main>
                <footer>
                    <div class="container">
                        <div class="footer_list">
                            <Logo/>
                            <Navlist/>
                            <FooterIcons/>
                        </div>
                    </div>
                    <GoogleMicrosoft/>
                </footer>
            </>
        )
    }
}

export default Main