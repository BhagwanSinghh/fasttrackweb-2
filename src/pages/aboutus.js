import React, { useEffect, useState } from "react";
import EnquiryComponent from "../components/equiryFrom";
import { pageDetails } from '../services/api/api.service'
import { useParams } from "react-router-dom";
import WhatWeOffer from "../components/whatWeOffer";
import ReviewAndRating from "../components/reviewRating";
import { IMAGE_PATH_URL } from "../constants/path";

function Aboutus() {
  const data = {name:"",mobile:"",email:""}
  const[inputData,setinputData] = useState(data)
  const [pageData, setPageData] = useState({})
  const [loader, setLoader] = useState(false)
  const { page_name } = useParams()

  useEffect(()=>{
    setLoader(true)
    pageDetails(page_name)
    .then((e)=>{
      setLoader(false)
      if(e.data.status == 200 && e.data.data.length != 0) {
        setPageData(e.data.data[0])
      }
    })
    .catch((err)=>{
      setLoader(false)
    })
  },[page_name])

  function handleData(e){
    setinputData({
      ...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(!inputData.name || !inputData.email || !inputData.mobile){
        alert("please fill all the Filed")
      }
      console.log(inputData,"cccccccccccc")
  }


  const Quote = {fullname:"" , Phonenumber : "" , Email : "" , Message : ""}
  const[createQuote,setCreateQuote] = useState(Quote)
  
  function Quotehandler (e){
    setCreateQuote
      ({...createQuote,[e.target.name]:e.target.value}) 
    }
    
    const handleQuote = (e) => {
      e.preventDefault();
      console.log(createQuote,"dddddddddddd111111")
      if(!createQuote.fullname || !createQuote.Email || !createQuote.Phonenumber || !createQuote.Message){
        alert("please fill all the Filed")
    }
}


let AnimationPoints = [100,600,1900,2700,3850,4700];
let mobileAnimationPoints = [0,900,2000,2600,3300,4000,4700,5400,6270,7200,7650];

function letAnimate(baseClass, AnimationClass){
  let element = document.querySelector(baseClass);
  element.classList.remove("hidden");
  element.classList.add('animate__animated',AnimationClass)
 }

 const animateMobile = () => {
  if(window.scrollY > mobileAnimationPoints[0]){
    letAnimate('.enquiry_icon1',"animate__backInLeft");
    letAnimate('.enquiry_icon2',"animate__backInLeft")
    letAnimate('.enquiry_form',"animate__backInRight");
  }
  if(window.scrollY > mobileAnimationPoints[1]){
    letAnimate('.about_left_img',"animate__slideInUp");
  }
  if(window.scrollY > mobileAnimationPoints[2]){
    letAnimate('.card_item_one',"animate__backInLeft");
    letAnimate('.benefit1_image',"animate__zoomIn");
  }
  if(window.scrollY > mobileAnimationPoints[3]){
    letAnimate('.card_item_two',"animate__backInLeft");
    letAnimate('.benefit2_image',"animate__zoomIn");
  }
  if(window.scrollY > mobileAnimationPoints[4]){
    letAnimate('.card_item_three',"animate__backInLeft");
    letAnimate('.benefit3_image',"animate__zoomIn");
  }
  if(window.scrollY > mobileAnimationPoints[5]){
    letAnimate('.card_item_four',"animate__backInRight");
    letAnimate('.benefit4_image',"animate__zoomIn");
  }
  if(window.scrollY > mobileAnimationPoints[6]){
    letAnimate('.card_item_five',"animate__backInRight");
    letAnimate('.benefit5_image',"animate__zoomIn");
  }
  if(window.scrollY > mobileAnimationPoints[7]){
    letAnimate('.card_item_six',"animate__backInRight");
    letAnimate('.benefit6_image',"animate__zoomIn");
  }
  if(window.scrollY > mobileAnimationPoints[8]){
    letAnimate('.discount_form',"animate__backInUp");
  }
  if(window.scrollY > mobileAnimationPoints[9]){
    letAnimate('.address',"animate__backInDown");
  }
  if(window.scrollY > mobileAnimationPoints[10]){
    letAnimate(".testimonial_section","animate__lightSpeedInLeft");
  }
 }


 const animateDesktop = () => {
  if(window.scrollY > AnimationPoints[0]){
    letAnimate('.enquiry_icon1',"animate__backInLeft");
    letAnimate('.enquiry_icon2',"animate__backInLeft")
    letAnimate('.enquiry_form',"animate__backInRight");
  }
  if(window.scrollY > AnimationPoints[1]){
    letAnimate('.about_left_img',"animate__slideInUp");
  }
  if(window.scrollY > AnimationPoints[2]){
    letAnimate('.card_item_one',"animate__backInLeft");
    letAnimate('.card_item_two',"animate__backInLeft");
    letAnimate('.card_item_three',"animate__backInLeft");
    letAnimate('.benefit3_image',"animate__zoomIn");
    letAnimate('.benefit1_image',"animate__zoomIn");
    letAnimate('.benefit2_image',"animate__zoomIn");
  }
  if(window.scrollY > AnimationPoints[3]){
    letAnimate('.card_item_four',"animate__backInRight");
    letAnimate('.card_item_five',"animate__backInRight");
    letAnimate('.card_item_six',"animate__backInRight");
    letAnimate('.benefit4_image',"animate__zoomIn");
    letAnimate('.benefit5_image',"animate__zoomIn");
    letAnimate('.benefit6_image',"animate__zoomIn");
  }
  if(window.scrollY > AnimationPoints[4]){
    letAnimate('.discount_form',"animate__backInUp");
    letAnimate('.address',"animate__backInDown");
  }
  if(window.scrollY > AnimationPoints[5]){
    letAnimate(".testimonial_section","animate__lightSpeedInLeft");
  }
 }
 window.onscroll = function(){
  if(screen.width > 760){
    animateDesktop();
  }
  else{
    animateMobile();
  }
 }

 if(loader) {
   return <h1>Loading....</h1>
 }

  return (
   
    <div>
      <div className="container-fluid home_banner">
        <div className="container container_fullWidth">
          <div className="row">
            <div className="col-12 banner_image">
              {pageData.picture?<img src={pageData.picture} alt="" />:<img src={IMAGE_PATH_URL+"about_us_banner.png"} alt="" />}
            </div>
            <div className="col-12 about_banner_content">
              <h2>{pageData.page_title}</h2>
              <p>{pageData.banner_title}</p>
             
            </div>
          </div>
        </div>
      </div>
      <div className="home_query_form">
        <p className="form_head"> Get a Instant <span class="mini_text">Quote!!</span></p>
        <EnquiryComponent />
      </div>
      <div className="container-fluid enquiry_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 enquiry_icon1 hidden">
            <h3>Make Your Reservation</h3>
              <p>You may now make reservation for your valuable consignment with us to make the moving and packing experience absolutely hassle free.
              </p>
            </div>
            <div className="col-sm-4 enquiry_icon2 hidden">
            <h3>Load Your Container</h3>
              <p>We assist you with the best to load the container with your valuable goods for moving and packing to desired location of shifting.
              </p>
            </div>

            <div className="col-sm-4 enquiry_form hidden">
              <h3>Are You Looking For?</h3>
              <p>Packers And Movers</p>
              <EnquiryComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about_company_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 about_right_content">
              <h2>About {pageData.page_title}</h2>
               
               <div dangerouslySetInnerHTML={{__html: pageData.short_description}}></div>

            </div>
            <div className="col-sm-6 about_left_img hidden">
              <img src={ IMAGE_PATH_URL +  'who_we_right_img.png'} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid charges_section">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h2>
                What Are The <strong>Charges</strong> Of Packers And Movers?
              </h2>
              <h4>
                Charges are inclusive of labour charge, transportation charge &
                packing charge.
              </h4>
              <p>
                Our packers and movers service starts at INR 1500, inclusive of
                transportation, packing, and labour charges. Prices may vary
                depending on your apartment size, distance of shifting, quantity
                of goods to be transported and locality you are residing in.
                Road tax,toll, parking etc. are not included in the fare.
              </p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: pageData.long_description}}></div>
          <p>
            <strong>Please note: </strong>The prices mentioned are indicative
            and subject to change.
          </p>
        </div>
      </div>
      <WhatWeOffer />
      <div className="container-fluid faq_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 ">
              <h3>FAQ</h3>
              <h2>Frequently Asked Questions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <h5>Have Any Questions?</h5>
              <p>
                Facilisi dictum faucibus className aptent convallis. Dui aliquet
                vitae pretium vestibulum nullam.
              </p>
              <div className="header_btn">
                <a href="#">Contact us</a>
              </div>
            </div>
            <div className="col-sm-8 ">
            <div dangerouslySetInnerHTML={{__html: pageData.faq}}></div>
            </div>
          </div>
        </div>
      </div>
 
      <ReviewAndRating />
     
    </div>
  );
}

export default Aboutus;
