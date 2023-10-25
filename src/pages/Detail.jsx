import React, { Component } from 'react'
import HeaderHeadContainer from '../components/HeaderHeadContainer'
import SectionHeaderDetail from '../components/SectionHeaderDetail'
import MiddlePart1 from '../components/MiddlePart1'
import MiddlePart2 from '../components/MiddlePart2'
import SectionHeaderDetail2 from '../components/SectionHeaderDetail2'
import SliderCard from '../components/SliderCard'
import LoadMore from '../components/LoadMore'
import Comments from '../components/Comments'
import Logo from '../components/Logo'
import Navlist from '../components/Navlist'
import FooterIcons from '../components/FooterIcons'
import GoogleMicrosoft from '../components/GoogleMicrosoft'
import { getMyList } from '../config/MainConfig'

export class Detail extends Component {
  state={
    myList : []
  }

  componentDidMount(){
    getMyList()
    .then(data=>{
      console.log(data);
      this.setState({
        myList : data
      })
    })
  }
  render() {
    const {myList} = this.state
    return (
      <>
        <body className='background'>
          <header>
            <HeaderHeadContainer />
          </header>
          <main>
            <section>
              <SectionHeaderDetail />
            </section>
            <section>
              <div class="container">
                <div class="section_middle">
                  <MiddlePart1/>
                  <MiddlePart2/>
                </div>
              </div>
            </section>
            <section>
              <SectionHeaderDetail2 />
              <SliderCard sliderArr={myList}/>
              <LoadMore />
            </section>
            <section>
              <Comments />
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
        </body>
      </>
    )
  }
}

export default Detail