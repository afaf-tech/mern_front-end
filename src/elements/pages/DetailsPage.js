import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "elements/parts/Header";
import PageDetailTitle from "elements/parts/PageDetailTitle";
import FeaturedImage from "elements/parts/FeaturedImage";
import PageDetailDescription from "elements/parts/PageDetailDescription";
import BookingForm from "elements/parts/BookingForm";
// import Activities from "elements/parts/Activities";
import Testimony from "elements/parts/Testimony";
import Categories from "elements/parts/Categories";
import Footer from "elements/parts/Footer";

import itemDetails from 'json/itemDetails.json'

// import { checkoutBooking } from "store/actions/checkout";
// import { fetchPage } from "store/actions/page";

export default class DetailsPage extends Component {
  componentDidMount(){
    window.title ="Details Page";
    window.scrollTo(0,0)
  }

  render() {
    // const { page, match } = this.props;

    // if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={itemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={itemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        {/* <Activities data={page[match.params.id].activityId} /> */}
        <Categories data={itemDetails.categories} />
        <Testimony data={itemDetails.testimonial} />

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

// export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
//   DetailsPage
// );
