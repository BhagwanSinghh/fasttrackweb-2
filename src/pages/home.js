import React, { useState } from "react";
// import HomepageBanner from '../assets/homepage_banner_image.jpeg';
import { getTrackstatus } from "../services/api/api.service";
import {  useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import EnquiryComponent from "../components/equiryFrom";
import ReviewAndRating from "../components/reviewRating";
import WhatWeOffer from "../components/whatWeOffer";
import { IMAGE_PATH_URL } from "../constants/path";


function Home() {
  const history = useHistory();
  const [data, setData] = useState("");
  //console.log(data, "hhhhhhh");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data == "") {
      toast("Docket No. Must be filled");
      return false;
    } else if (data.length < 5) {
      toast("Correct the Docket No.");
      return false;
    }
    await getTrackstatus(data)
      .then((res) => {
        if (res.status == 200) {
          history.push("/tracking", { docket_id: data });
        }
        else {
          toast("Docket No. Does not exceed");
        }
      })
      .catch((err) => {
        toast("Docket No. Does not exceed");
      });
  };
  
  // ScrollY value of animation

  let AnimationPoints = [260, 700, 1000, 1200, 1300, 2000, 2500, 3250, 3350, 3750, 3950, 4950, 5450, 6100];
  //let mobileAnimationPoints = [400,1020,1500,2000,2400,2800,3200,3400,3750,4100,4940,5800,6070,6300,6700,8600,9700];

 

  let mobileAnimationPoints = [400,600,800,1000,1200,1400,1600,1800,2000,2200,2400,2600,2800,3000,3200,3400,3600];

  // Animation Programme


  let startCount = true;
  function AnimatedCount(id, number, multiplyer) {
    let counts = setInterval(updated, 1);
    let upto = 0;
    function updated() {
      var count = document.getElementById(id);
      count.innerHTML = ++upto + multiplyer + "+";
      if (upto === number) {
        clearInterval(counts);
      }
    }
  }

  function letAnimate(baseClass, AnimationClass) {
    let element = document.querySelector(baseClass);
    if(element) {
      element.classList.remove("hidden");
      element.classList.add('animate__animated', AnimationClass)
    }
  }


  const animationDesktop = () => {
    if (window.scrollY > AnimationPoints[0]) {
      letAnimate(".shipment_icon1", "animate__backInLeft")
      letAnimate(".shipment_icon2", "animate__backInLeft")
      letAnimate(".shipment_form", "animate__backInRight")
    }
    if (window.scrollY > AnimationPoints[1]) {
      letAnimate(".about_left_img", "animate__fadeInDown")
    }
    if (window.scrollY > AnimationPoints[2]) {
      letAnimate(".first_list", "animate__fadeInRightBig")
      letAnimate(".second_list", "animate__fadeInLeftBig")
      letAnimate(".third_list", "animate__fadeInRightBig")
    }
    if (window.scrollY > AnimationPoints[3]) {
      letAnimate(".discover_btn", "animate__pulse")
    }
    if (window.scrollY > AnimationPoints[4] && startCount) {
      AnimatedCount("happy_clients_count", 190, "K");
      AnimatedCount("empyopees_count", 3, "K");
      AnimatedCount("branches_count", 125, "");
      AnimatedCount("service_year_count", 25, "");
      startCount = false;
    }
    if (window.scrollY > AnimationPoints[5]) {
      letAnimate(".card_first", "animate__fadeInRightBig");
      letAnimate(".card_second", "animate__fadeInDownBig");
      letAnimate(".card_third", "animate__fadeInLeftBig");
    }
    if (window.scrollY > AnimationPoints[6]) {
      letAnimate(".card_forth", "animate__fadeInRightBig");
      letAnimate(".card_fifth", "animate__fadeInDownBig");
      letAnimate(".card_sixth", "animate__fadeInLeftBig");
    }
    if (window.scrollY > AnimationPoints[7]) {
      letAnimate(".why_choose_first", "animate__zoomIn");
    }
    if (window.scrollY > AnimationPoints[8]) {
      letAnimate(".why_choose_second", "animate__zoomIn");
    }
    if (window.scrollY > AnimationPoints[9]) {
      letAnimate(".why_choose_third", "animate__zoomIn");
    }
    if (window.scrollY > AnimationPoints[10]) {
      letAnimate(".why_choose_forth", "animate__zoomIn");
    }
    if (window.scrollY > AnimationPoints[11]) {
      letAnimate(".portfolio_item_first", "animate__slideInLeft");
      letAnimate(".portfolio_item_second", "animate__slideInUp");
      letAnimate(".portfolio_item_third", "animate__slideInRight");
    }
    if (window.scrollY > AnimationPoints[12]) {
      letAnimate(".testimonial_section", "animate__lightSpeedInLeft");
    }
    if (window.scrollY > AnimationPoints[13]) {
      letAnimate(".request_btn", "animate__flash");
    }
  }

  const animationMobile = () => {
    if (window.scrollY > mobileAnimationPoints[0]) {
      letAnimate(".shipment_form", "animate__backInRight")
    }
    if (window.scrollY > mobileAnimationPoints[1]) {
      letAnimate(".first_list", "animate__fadeInRightBig")
      letAnimate(".second_list", "animate__fadeInLeftBig")
      letAnimate(".third_list", "animate__fadeInRightBig")
      letAnimate(".discover_btn", "animate__pulse")
    }
    if (window.scrollY > mobileAnimationPoints[2]) {
      letAnimate(".about_left_img", "animate__fadeInDown")
    }
    if (window.scrollY > mobileAnimationPoints[3] && startCount) {
      AnimatedCount("happy_clients_count", 190, "K");
      AnimatedCount("empyopees_count", 3, "K");
      AnimatedCount("branches_count", 125, "");
      AnimatedCount("service_year_count", 25, "");
      startCount = false;
    }
    if (window.scrollY > mobileAnimationPoints[4]) {
      letAnimate(".card_first", "animate__fadeInRightBig");
    }
    if (window.scrollY > mobileAnimationPoints[5]) {
      letAnimate(".card_second", "animate__fadeInDownBig");
    }
    if (window.scrollY > mobileAnimationPoints[6]) {
      letAnimate(".card_third", "animate__fadeInLeftBig");
    }
    if (window.scrollY > mobileAnimationPoints[7]) {
      letAnimate(".card_forth", "animate__fadeInRightBig");
    }
    if (window.scrollY > mobileAnimationPoints[8]) {
      letAnimate(".card_fifth", "animate__fadeInDownBig");
    }
    if (window.scrollY > mobileAnimationPoints[9]) {
      letAnimate(".card_sixth", "animate__fadeInLeftBig");
    }
    if (window.scrollY > mobileAnimationPoints[10]) {
      letAnimate(".why_choose_first", "animate__zoomIn");
    }
    if (window.scrollY > mobileAnimationPoints[11]) {
      letAnimate(".why_choose_second", "animate__zoomIn");
    }
    if (window.scrollY > mobileAnimationPoints[12]) {
      letAnimate(".why_choose_third", "animate__zoomIn");
    }
    if (window.scrollY > mobileAnimationPoints[13]) {
      letAnimate(".why_choose_forth", "animate__zoomIn");
    }
    if (window.scrollY > mobileAnimationPoints[14]) {
      letAnimate(".portfolio_item_first", "animate__slideInLeft");
      letAnimate(".portfolio_item_second", "animate__slideInUp");
      letAnimate(".portfolio_item_third", "animate__slideInRight");
    }
    if (window.scrollY > mobileAnimationPoints[15]) {
      letAnimate(".testimonial_section", "animate__lightSpeedInLeft");
    }
    if (window.scrollY > mobileAnimationPoints[16]) {
      letAnimate(".request_btn", "animate__flash");
    }
  }
  //alert(screen.width)
  window.onscroll = function (){
    if(screen.width > 760){
      animationDesktop();
    }
    else{
      animationMobile();
    }
  }
 

  return (
    <div>
      <ToastContainer />
      <div class="container-fluid home_banner">
        <div class="container container_fullWidth">
          <div class="row">
            <div class="col-12 banner_image">
              <img src={IMAGE_PATH_URL+"homepage_banner_image.jpg"} alt="" />
            </div>
            <div class="col-12 banner_content">
              <h2>
                Connect with us to move your <span>goods hassle-free</span>
              </h2>
              <p class="hidden_in_mobile animate__animated animate__fadeIn animate__delay-1s">
                Make your moving and shifting experience absolutely worthwhile with us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_query_form">
        <p className="form_head"> Get a Instant <span class="mini_text">Quote!!</span></p>
        <EnquiryComponent />
      </div>
      <div class="container-fluid sipment_section">
        <div class="container">
          <div class="row">
            <div class="hidden_in_mobile col-sm-4 shipment_icon1 hidden">
              <h3>Make Your Reservation</h3>
              <p>You may now make reservation for your valuable consignment with us to make
                the moving and packing experience absolutely hassle free.
              </p>
            </div>
            <div class="hidden_in_mobile col-sm-4 shipment_icon2 hidden">
              <h3>Load Your Container</h3>
              <p>We assist you with the best to load the container with your valuable goods for
                moving and packing to desired location of shifting.
              </p>
            </div>



            <div class="col-sm-4 shipment_form hidden">
              <h3>Track Your Shipment</h3>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Insert tracking number here..."
                  id="data"
                  name="data"
                  value={data}
                  onChange={handleChange}
                />
                <button>
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                </button>
              </form>
              <p>To help you self-satisfaction track your shipments quickly  with us.
              </p>
            </div>

            


          </div>
        </div>
      </div>

      <div class="container-fluid about_company_section">
        <div class="container">

          <div class="row home_about_us">
            <div class="col-sm-6 about_left_img hidden">
              <img src={IMAGE_PATH_URL + 'about_left_img.png'} />
            </div>
            <div class="col-sm-6 about_right_content">
              <h3>About Company</h3>
              <h2>RETRO PACKERS AND MOVERS PRIVATE LIMITED</h2>
              <p>
                We, Retro Packers and Movers Pvt. Ltd. are a technology driven- packers & Movers Company in India.
                We have a diverse network and professional staff with an experience of more than 25 years in the
                field of logistics. The organizations are registered in the Ministry of Govt. affaires (MCA) CIN
                NO-U52293DL2023PTC410940, TAN NO-DELR45400F and is certified in ISO 9001:2015.  </p>
              <ul>
                <li class="first_list hidden">
                  <h4>Local Shifting</h4>
                  <p>The best commercial and affordable local shifting services as per your needs and requirements. </p>
                </li>
                <li class="second_list hidden">
                  <h4>Domestic Shifting</h4>
                  <p>
                    Offering hassle-free relocation services as per your convenience.</p>
                </li>
                <li class="third_list hidden">
                  <h4>International Shifting</h4>
                  <p>
                    Offering integrated solutions for home relocation and corporate office relocation solutions at an international level.
                  </p>
                </li>
              </ul>
              <div class="discover_btn hidden">
                <a href="/about-us">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container-fluid about_services_section">
        <div class="container">
          <div class="row"> */}
      {/* <div class="col-sm-6 about_services_left_content">
              <h2>EMPOWER YOUR BUSINESS WITH RETRO PACKERS AND MOVERS</h2>
              <p>We offer the best of packing, loading, unloading and transportation services so much so that you do not have to move even an inch.
                With the best of technology infrastructure, our experts serve you efficiently and effectively ensuring you the best logistic operations at all times. </p>
            </div> */}
      {/* <div class="col-sm-6 about_services_right_content"> */}

      {/* </div>
          </div>
        </div> */}
      {/* </div> */}
      <div class="container-fluid company_in_no_section">
        <div class="container_half">
          <div class="row">
            <div class="col-sm-4 heading">
              <h3>Our Company In Number</h3>
            </div>
            <div class="col-sm-2">
              <h3 id="happy_clients_count"></h3>
              <p>Happy Clients</p>
            </div>
            <div class="col-sm-2">
              <h3 id="empyopees_count"></h3>
              <p>No of employees</p>
            </div>
            <div class="col-sm-2">
              <h3 id="branches_count"></h3>
              <p>Branches & Logistics Facility</p>
            </div>
            <div class="col-sm-2">
              <h3 id="service_year_count"></h3>
              <p>Year</p>
            </div>
          </div>
        </div>
      </div>
      <WhatWeOffer />






      <div class="container-fluid why_choose_section">
        <div class="container">
          <div class="row">
            <div class="col-12 why_choose_heading">
              <h4>Why Choose US? </h4>
              <h2>Experience the benefits of smooth moving</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 why_choose_img">
              <img src={IMAGE_PATH_URL+"why_choose_img_1.jpg"} alt="" />
            </div>
            <div class="col-sm-6 why_choose_content why_choose_first hidden">
              <h3>Experience the benefits of smooth moving</h3>
              <p>
                Retro Packers and Movers are extremely keen on giving a smile to our customers who wish to avail the packing and moving services from us. </p>
            </div>
          </div>
          <div class="row flex-row-reverse">
            <div class="col-sm-6 why_choose_img">
              <img src={IMAGE_PATH_URL+"why_choose_img_2.jpg"} alt="" />
            </div>
            <div class="col-sm-6 why_choose_content why_choose_second hidden">
              <h3>Time On Door Delivery</h3>
              <p>
                We conveniently and safely relocate your items from your home or office to your desired location within the shortest possible time.



              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 why_choose_img">
              <img src={IMAGE_PATH_URL+"why_choose_img_3.jpg"} alt="" />
            </div>
            <div class="col-sm-6 why_choose_content why_choose_third hidden">
              <h3>Perfect Boxes</h3>
              <p>
                To safeguard your belongings from external damage, we use a variety of high-quality boxes such as LED boxes, fabric sheets, and Perfect boxes.



              </p>
            </div>
          </div>
          <div class="row flex-row-reverse">
            <div class="col-sm-6 why_choose_img">
              <img src={IMAGE_PATH_URL+"why_choose_img_4.jpg"} alt="" />
            </div>
            <div class="col-sm-6 why_choose_content why_choose_forth hidden">
              <h3>Mobile Shipment Tracking</h3>
              <p>
                Our advanced Online Tracking system allows you to monitor your shipment's progress with ease. Additionally, we offer complete support and services in all situations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid portfoilio_section">
        <div class="container">
          <div class="row">
            <div class="col-12 ">
              <h4>Our Portfolio</h4>
              <h2>THE ONE STOP SOLUTION FOR YOUR ENTIRE MOVERS AND PACKERS JOURNEY</h2>
              <p>
                LEARN HOW WE HELP OUT COSTOMERS ACHIEVE THEIR GOALS IN THEIR 'MOVERS AND PACKERS' JOURNEY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid portfolio_card">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 card_content portfolio_item_first hidden">
              <img src={IMAGE_PATH_URL+"ware_house.jpg"} />
              <h3>Warehousing</h3>
              <p>Retro Packers and Moves Pvt Ltd have well-established warehouses to assist you in carefully storing and safeguarding your belongings without causing you any hassle. Our warehouses are well kept and supervised to prevent any unforeseen circumstances.
              </p>

            </div>
            <div class="col-sm-4 card_content portfolio_item_second hidden">
              <img src={IMAGE_PATH_URL+"pet_relocation.jpg"} />
              <h3>Pet Relocation
              </h3>
              <p>Retro Packers and Moves ensures that your entire journey of pet relocation is safe, smooth and hassle-free. Our professionals make sure to stringently adhere to your pet's routine, dietary preferences and medications schedule.
              </p>

            </div>
            <div class="col-sm-4 card_content portfolio_item_third hidden">
              <img src={IMAGE_PATH_URL+"corporate.png"} />
              <h3>Logistic Services</h3>
              <p>Retro Packers and Movers takes immense care of your delivery needs with multiple vehicles type available for you to suffice your logistic requirements. With our strong and diverse network, we are highly committed to assist our clients with the best quality of services
              </p>
            </div>
          </div>
        </div>
      </div>
      <ReviewAndRating />
      <div class="container-fluid brand_partner_section">
        <div class="container container_fullWidth">
          <div class="row">
            <h4>Our partners :</h4>
            <div class="col-sm-5 brand_left_img">
              <img src={ IMAGE_PATH_URL + 'brand_section_banner.png'} />
            </div>
            <div class="col-sm-7 brand_right_content">
              <ul>
                <li>
                  <img src={IMAGE_PATH_URL + 'brand_logo (1).png'} />
                </li>
                <li>
                  <img src={IMAGE_PATH_URL+ "brand_logo (2).png"} />
                </li>
                <li>
                  <img src={IMAGE_PATH_URL+"brand_logo (3).png"} />
                </li>
                <li>
                  <img src={IMAGE_PATH_URL+"brand_logo (4).png"} />
                </li>
              </ul>
              <div class="brand_contact">
                <h2>READY TO GET MOVING? GET YOUR FREE QUOTE</h2>
                <p>Feel Free to Call Us For More Information</p>
                <h3>Call Us: +91 <a href="tel:09990056755">9990056755</a></h3>
                <div class="request_btn hidden">
                  <a href="/contact-us">Request Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
