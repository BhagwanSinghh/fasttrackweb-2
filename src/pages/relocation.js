import React, { useState } from "react";
import relo from "../assets/contact_us_banner.jpeg"
// import query from "../Image/query_section_img.png"
import mappedd from "../Image/map_img.png"
import EnquiryComponent from "../components/equiryFrom";
import { ToastContainer } from "react-toastify";
import { IMAGE_PATH_URL } from "../constants/path";


function relocation() {


  return (
    <div>
      <ToastContainer />
      {/* <div className="container-fluid mobile_contact_us_banner">
          <h2>GET IN TOUCH</h2>
      </div> */}
      <div className="container-fluid home_banner">
        <div className="container container_fullWidth">
          <div className="row">
            <div className="col-12 banner_image">
              <img src={IMAGE_PATH_URL+"contact_us_banner.jpeg"} alt="" />
            </div>
            <div className="col-12 banner_content">
              <h2>GET IN TOUCH</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid query_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 query_img">
              <img src={IMAGE_PATH_URL+"query_section_img.png"} alt = "" />
              <ul>
                {/* <!-- Facebook --> */}
                <li>
                  <a href="#">
                    <i
                      className="fa fa-facebook-official"
                      aria-hidden="true"
                      style={{color: "#3b5998"}}
                    ></i>
                  </a>
                </li>

                {/* <!-- Twitter --> */}
                <li>
                  <a href="#">
                    <i
                      className="fa fa-twitter-square"
                      aria-hidden="true"
                      style={{color: "#55acee"}}
                    ></i>
                  </a>
                </li>

                {/* <!-- Google --> */}
                <li>
                  <a href="#">
                    <i
                      className="fa fa-google"
                      aria-hidden="true"
                      style={{color: "#dd4b39"}}
                    ></i>
                  </a>
                </li>

                {/* <!-- Instagram --> */}
                <li>
                  <a href="#">
                    <i
                      className="fa fa-instagram"
                      aria-hidden="true"
                      style={{color: "#ac2bac"}}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 query_form">
              <p className="form_head"> Get a Instant <span class="mini_text">Quote!!</span></p>
              <EnquiryComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="container_fluid info_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 main_office">
              {/* <h5>Main office</h5> */}
              <div className="contact_icon">
              <i class="fa fa-map-marker location_icon" aria-hidden="true"></i>
              </div>
              <h6>Head office</h6>
              <p>
              Plot No 492, Poli No B456, Near Dispensary Village,<br />Bijwasan, Delhi - 110061
              </p>
              <h6>BRANCH office</h6>
              <p>
              #62/1818 Group No 7, <br />Tagore Nagar Vikhroli East<br /> Mumbai -400083
              </p>
            </div>
            <div className="col-sm-4 main_office">
              {/* <h5>Make A Call</h5> */}
              <div className="contact_icon">
              <i class="fa fa-phone  phone_icon" aria-hidden="true"></i>
              </div>
              <ul>
                <li>+91 999 005 6755</li>
                <li>+91 999 222 2697</li>
              </ul>
              <p>Mon-Sat: 09am-08pm</p>
            </div>
            <div className="col-sm-4 main_office">
              {/* <h5>Send A Mail</h5> */}
              <div className="contact_icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <p className="mail">support@retropackers.com</p>
              <p className="mail">retropackers@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid brand_partner_section">
        <div classname="container">
        <div className="row">
          <div className="col-12 ">
            <img src= {mappedd} />
          </div>
        </div>
        </div>
      </div> */}
    </div>
  );
}

export default relocation;
