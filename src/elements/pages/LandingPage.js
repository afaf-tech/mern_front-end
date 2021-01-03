import React, { Component } from 'react'

import Header from 'elements/parts/Header';

import Hero from 'elements/parts/Hero'
import MostPicked from 'elements/parts/MostPicked'
import Categories from 'elements/parts/Categories'
import Testimony from 'elements/parts/Testimony'
import Footer from 'elements/parts/Footer'
class  LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        document.title = "Staycation | Home";
        window.scrollTo(0, 0);
    
        if (!this.props.page.landingPage)
          this.props.fetchPage(`/landing-page`, "landingPage");
      }
    render(){
        const { page } = this.props;

        if (!page.hasOwnProperty("landingPage")) return null;

        return (
            <>
              <Header {...this.props}></Header>
              <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
              <MostPicked
                refMostPicked={this.refMostPicked}
                data={page.landingPage.mostPicked}
              />
              <Categories data={page.landingPage.category} />
              <Testimony data={page.landingPage.testimonial} />
              <Footer />
            </>
          );
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});
  
  export default connect(mapStateToProps, { fetchPage })(LandingPage);


