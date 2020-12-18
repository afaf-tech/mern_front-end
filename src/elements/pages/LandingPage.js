import React, { Component } from 'react'

import Header from 'elements/parts/Header';

import landingPage from 'json/landingPage.json'
import Hero from 'elements/parts/Hero'
import MostPicked from 'elements/parts/MostPicked'
export default class  LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render(){

        return (
            <>
            <Header {...this.props}></Header>
            <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
            <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
        </>
    )
}
}


