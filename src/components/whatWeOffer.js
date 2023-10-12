import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { IMAGE_PATH_URL } from "../constants/path";
 

const WhatWeOffer = () => {
    return <Fragment>
        <div class="container-fluid what_we_offer">
        <div class="container">
          <div class="row">
            <div class="col-12 offer_content">
              <h4>What we Offer</h4>
              <h2>Big or small…   We will handle it all…</h2>
              <p>Our experts serve you efficiently and effectively ensuring you the best logistic operations at all times.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid we_offer_card">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 card_first  box_shadow card_body">
            <Link to="/services/house-shifting"><img src={IMAGE_PATH_URL+"home_relocation_hrz.jpg"} alt="..." /></Link>
              <div class="text-center">
                <h5 class="card-title">Home Relocation</h5>
                <p class="card-text">Offering hassle free house move service with packing, loading and unloading.</p>
                <div class="read_more_btn">
                  <Link to="/services/house-shifting">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 card_second  box_shadow card_body">
            <Link to="/services/bike-shifting"><img src={IMAGE_PATH_URL+"bike_relocation_hrz.jpg"} alt="..." /></Link>
              {/* <div class="card_body"> */}
                  <div class="text-center">
                <h5 class="card-title">Bike Relocation</h5>
                <p class="card-text">Moving your bikes to your desired location with door-to-door relocation</p>
                <div class="read_more_btn">
                <Link to="/services/bike-shifting">Read More</Link>
                </div>
                {/* <h5>Bike Relocation</h5>
                <p>Moving your bikes to your desired location with door-to-door relocation</p>
                <div>
                  <a href="#">Read More</a>
                </div> */}
              </div>
            </div>
            <div class="col-lg-4 card_third  box_shadow card_body">
            <Link to="/services/car-transportation"><img src={IMAGE_PATH_URL+"car_relocation_hrz.jpg"} alt="..." /></Link>
              <div class="text-center">
                <h5 class="card-title">Car Relocation</h5>
                <p class="card-text">Your car transfer is absolutely safe with relocation and loading through our services.</p>
                <div class="read_more_btn">
                <Link to="/services/car-transportation">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 card_forth  box_shadow card_body">
            <Link to="/services/international-shifting"><img src={IMAGE_PATH_URL+"air_shifting_hrz.jpg"} alt="..." /></Link>
              <div class="text-center">
                <h5 class="card-title">Air Freight</h5>
                <p class="card-text">Assisting with the best air freight services through our experienced and professional staff.</p>
                <div class="read_more_btn">
                <Link to="/services/international-shifting">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 card_fifth  box_shadow card_body">
            <Link to="/services/international-shifting"><img src={IMAGE_PATH_URL+"ocean_hrz.jpg"} /></Link>
              <div class="text-center">
                <h5 class="card-title">Ocean Freight</h5>
                <p class="card-text">Assisting with the best ocean freight services to deliver your products safely and securely.</p>
                <div class="read_more_btn">
                <Link to="/services/international-shifting">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 card_sixth  box_shadow card_body">
            <Link to="/services/office-shifting"><img src={IMAGE_PATH_URL+"office_transportation-hrz.jpg"} /></Link>
              <div class="text-center">
                <h5 class="card-title">Corporate  Relocation</h5>
                <p class="card-text">Offering the best office shifting services to make sure you get all the benefits.</p>
                <div class="read_more_btn">
                <Link to="/services/office-shifting">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
}


export default WhatWeOffer