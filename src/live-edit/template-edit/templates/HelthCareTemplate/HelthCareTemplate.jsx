import React, { Component } from 'react'



import Header from './sections/Header'
import Offers from './sections/Offers'
import Boxies from './sections/Boxies'
import Contact from './sections/Contact'
import GetStarted from './sections/GetStarted'
import Footer from './sections/Footer'

import './HelthCareTemplate.scss';


export class HelthCareTemplate extends Component {
    //fn koja  updatuje state handleSelectElement iz section components
    render() {
        return (
            <div className='HelthCareTemplate'>

                <Header />
                <Offers updateState={this.updateState} />
                <Boxies />
                <Contact />
                <GetStarted />
                <Footer />
            </div>
        )

    }
}

export default HelthCareTemplate
