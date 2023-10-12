import React, { useState } from 'react';
import ReviewAndRating from '../components/reviewRating';
import EnquiryComponent from '../components/equiryFrom';
import { IMAGE_PATH_URL } from '../constants/path';




function Services() {
    const [tab, setTab] = useState(1)
    const animationPoints = [250, 400, 550, 700, 1300, 1750, 2200, 3000];
    const mobileAnimationPoints = [0,650,900,1150,1700,2200,2900,3200,4200];

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
        element.classList.remove("hidden");
        element.classList.add('animate__animated', AnimationClass)
    }

    

    const animateDesktop = () => {
        if (window.scrollY > animationPoints[0]) {
            letAnimate(".about_left_img", 'animate__slideInUp')
        }
        if (window.scrollY > animationPoints[1]) {
            letAnimate(".about_text_one", 'animate__fadeInRightBig')
        }
        if (window.scrollY > animationPoints[2]) {
            letAnimate(".about_text_two", 'animate__fadeInLeftBig')
        }
        if (window.scrollY > animationPoints[3]) {
            letAnimate(".about_text_three", 'animate__fadeInRightBig')
        }
        if (window.scrollY > animationPoints[4] && startCount === true) {
            AnimatedCount("happy_clients_count", 190, "K");
            AnimatedCount("employees_count", 3,"K");
            AnimatedCount("branches_count", 125, "");
            AnimatedCount("service_years_count", 25,"");
            startCount = false;
        }
        if (window.scrollY > animationPoints[5]) {
            letAnimate(".about_strategy", 'animate__backInLeft');
            letAnimate(".about_left_section", 'animate__backInRight');
        }
        if (window.scrollY > animationPoints[6]) {
            letAnimate(".testimonial_section","animate__lightSpeedInLeft");
        }
        if (window.scrollY > animationPoints[7]) {
            letAnimate(".request_btn","animate__flash");
        }
    }

    const animateMobile = () => {
        if (window.scrollY > mobileAnimationPoints[0]) {
            letAnimate(".about_left_img", 'animate__slideInUp')
        }
        if (window.scrollY > mobileAnimationPoints[1]) {
            letAnimate(".about_text_one", 'animate__fadeInRightBig')
        }
        if (window.scrollY > mobileAnimationPoints[2]) {
            letAnimate(".about_text_two", 'animate__fadeInLeftBig')
        }
        if (window.scrollY > mobileAnimationPoints[3]) {
            letAnimate(".about_text_three", 'animate__fadeInRightBig')
        }
        if (window.scrollY > mobileAnimationPoints[4] && startCount) {
            AnimatedCount("happy_clients_count", 190, "K");
            AnimatedCount("employees_count", 3,"K");
            AnimatedCount("branches_count", 125, "");
            AnimatedCount("service_years_count", 25,"");
            startCount = false;
        }
        if (window.scrollY > mobileAnimationPoints[5]) {
            letAnimate(".about_strategy", 'animate__backInLeft');
        }
        if (window.scrollY > mobileAnimationPoints[6]) {
            letAnimate(".about_left_section", 'animate__backInRight');
        }
        if (window.scrollY > mobileAnimationPoints[7]) {
            letAnimate(".testimonial_section","animate__lightSpeedInLeft");
        }
        if (window.scrollY > mobileAnimationPoints[8]) {
            letAnimate(".request_btn","animate__flash");
        }
    }

    window.onscroll = function () {
        if(screen.width > 760){
            animateDesktop();
          }
          else{
            animateMobile();
          }
    }
    return (
        
        <div>
            <div class="container-fluid home_banner">

                <div class="col-12 banner_image">
                    <img src={IMAGE_PATH_URL+"image_1.jpg"} alt="" />
                </div>

            </div>

            <div className="home_query_form">
        <p className="form_head"> Get a Instant <span class="mini_text">Quote!!</span></p>
        <EnquiryComponent />
      </div>

            <div class="container-fluid about_company_section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 about_left_img hidden">
                            <img src={IMAGE_PATH_URL+"about_top.jpg"} />
                        </div>
                        <div class="col-sm-6 about_right_content">
                            <h3>About Company</h3>
                            <h2>RETRO PACKERS AND MOVERS   PVT LTD</h2>
                            <p>We, Retro Packers and Movers Pvt. Ltd. are a technology-driven- Packers and Movers Company in India that stringently focuses on assisting with quality and reliable services to all its customers. We have a diverse network and professional staff with an experience of more than 25 years in the field of logistics.  Our services function very efficiently and effectively with smooth operations backed up by the best quality packaging material. Our ultimate vision is to handle all your packing, loading, unloading and transportation requirements, so much so that you do not have to move even an inch. Our services are absolutely standardized as per international norms as well as modern equipped facilities. With the highly established technology-enabled platform, our ultimate vision and objective are to be recognized as the best packers and movers organization in the country. The organization is registered in the Ministry of Govt. Affairs (MCA) CIN NO-U52293DL2023PTC410940, TAN NO-DELR45400F and is certified in ISO 9001:2015.
                            </p>
                        </div>
                        <div class="col-sm-6 about_right_content_down">
                            <ul>
                                <li class="hidden about_text_one">
                                    <h4>Local Shifting at home</h4>
                                    <p>Retro Packers & Movers Pvt Ltd. assists with the best commercial and affordable local shifting services as per the needs and requirements of the customer. Be it local shifting within the city premises or from one city to another, we are highly professional and competent in the industry to assist with the best services at all times.
                                    </p>
                                </li>
                                <li class="hidden about_text_two">
                                    <h4>Domestic Shifting</h4>
                                    <p>Retro Packers & Movers Pvt Ltd. offers hassle-free relocation services with zero damage & zero hidden cost for domestic relocation. We make sure to take absolute care of disassembly, packing, unpacking, loading as well as transport till the final placement of your goods. We provide end-to-end services to more than 17150+ postal codes in India.
                                    </p>
                                </li>
                                <li class="hidden about_text_three">
                                    <h4>International Shifting    </h4>
                                    <p>Retro Packers & Movers Pvt Ltd. well understands that moving to a new country is just not easy. It involves many formalities such as pre-move survey, packing, freight as well as customs clearance. With our global footprint, we offer the best of integrated solutions for home relocation and corporate office relocation solutions at an international level. We ensure that there is absolute secure handling of personal assets so that there is easy relocation across the globe

                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid company_in_no_section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <h3>Our Company In
                                Number</h3>
                        </div>
                        <div class="col-sm-2">
                            <h3 id="happy_clients_count"></h3>
                            <p>Happy Clients</p>
                        </div>
                        <div class="col-sm-2">
                            <h3 id="employees_count"></h3>
                            <p>No of employees</p>
                        </div>
                        <div class="col-sm-2">
                            <h3 id="branches_count"></h3>
                            <p>Branches & Logistics Facility</p>
                        </div>
                        <div class="col-sm-2">
                            <h3 id="service_years_count"></h3>
                            <p>Year</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid about_company">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 about_strategy hidden">
                            <h5>Strategy</h5>
                            <h2>Logistic Beyond Expectation </h2>
                            <p>Our expert team assisting you with the service of all types of Relocation makes sure to assist you with specialized containers for home articles scratch-free solutions.
                            </p>
                            <div class="about_under_section">
                                <ul>
                                    <li onClick={()=>setTab(1)} className={tab == 1? 'selected':''}>Fast Service</li>
                                    <li onClick={()=>setTab(2)} className={tab == 2? 'selected':''}>100% Accuracy</li>
                                    <li onClick={()=>setTab(3)} className={tab == 3? 'selected':''}>Safety Guarntee</li>
                                </ul>
                                {tab==1?<div className='about_tab1'>We make sure to stringently adhere to the best policies and conditions at all times.</div>:null}
                                {tab==2?<div className='about_tab1'>We try to make your entire journey of relocation 100% safe, smooth and hassle-free.</div>:null}
                                {tab==3?<div className='about_tab1'>We stringently focus on assisting with quality and reliable services to all its customers.</div>:null}
                            </div>
                        </div>
                        <div class="col-sm-6 about_left_section hidden">
                            <img src={IMAGE_PATH_URL+"about_bottom_img.jpg"} />
                            

                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid why_choose_inner">
                <div class="container">
                    <div class="row">
                    <div class="col-sm-6">
                            <img src={IMAGE_PATH_URL+"about_left_img.png"} />
                            

                        </div>
                        <div class="col-sm-6">
                            <h3>WHY CHOOSE US?</h3>
                            <h2>Experience the benefits of smooth moving</h2>
                            <p>Retro Packers and Movers are extremely keen on giving a smile to our customers who wish to avail the packing and moving services from us. We give you the following advantages so that you consider us at all times for your moving and packing requirements.</p>
                            <ul>
                                <li>Safe and damage free handling</li>
                                <li>Guaranteed delivery on time</li>
                                <li>The best of customer care services</li>
                                <li>The best of relocation services for your home and office</li>
                                <li>Immediate on spot settlement of your claims.</li>
                                <li>Experienced and proficient team</li>
                                <li>Transportation vehicles of various types available</li>
                                <li>Well maintained warehousing</li>
                                <li>Insurance for all movables</li>
                                <li>Best quality packing and moving materials and handling techniques</li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
            <ReviewAndRating />
            <div class="container-fluid brand_partner_section">
                <div class="container">
                    <div class="row">
                        <h4>Our partners :</h4>
                        <div class="col-sm-5 brand_left_img">
                            <img src={IMAGE_PATH_URL+"brand_section_banner.png"} />
                        </div>
                        <div class="col-sm-7 brand_right_content">
                            <ul>
                                <li><img src={IMAGE_PATH_URL+"brand_logo (1).png"} /></li>
                                <li><img src={IMAGE_PATH_URL+"brand_logo (2).png"} /></li>
                                <li><img src={IMAGE_PATH_URL+"brand_logo (3).png"} /></li>
                                <li><img src={IMAGE_PATH_URL+"brand_logo (4).png"} /></li>
                            </ul>
                            <div class="brand_contact">
                                <h2>READY TO GET MOVING? GET YOUR FREE QUOTE</h2>
                                <p>Feel Free to Call Us For More Information</p>
                                <h3>Call Us: +91 9990056755</h3>
                                <div class="request_btn"><a href="#">Request Quote</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Services