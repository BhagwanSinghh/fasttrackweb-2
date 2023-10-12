import React, { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { saveEnquiry } from "../services/api/api.service";
import Regex from '../utility/regex'
import emailjs from '@emailjs/browser';


const EnquiryComponent = () => {
  const Quest = { Enter_Name: "", Phone: "", Email: "", Message: "",Location:""}
  const [inputData, setInputData] = useState(Quest);
  const [disable, setDisable] = useState(false);
  const getQuest = (e) => {
    setInputData({
      ...inputData, [e.target.name]: e.target.value
    })
   // console.log(inputData, "ccccccccccccc")
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputData.Enter_Name == "") {
      toast("Please Enter the FullName");
      return false;
    } else if (inputData.Enter_Name.length <= 3) {
      toast("Fullname length must Be greater Than 3");
      return false;
    }
    else if (inputData.Phone == "") {
      toast("Please Enter The Number");
      return false;
    }
    else if (inputData.Phone.length != 10) {
      toast("Please Enter the Valid Phone Number");
      return false;
    }
    if (inputData.Email == "") {
      toast("Please Enter The Email");
      return false;
    }
    else if (!Regex.email(inputData.Email)) {
      toast("Please Enter Correct Email");
      return false;
    }
    if(inputData.Location == ""){
      toast("Please Select Your Location");
      return false;
    }
    if (inputData.Message == "") {
      toast("Please Enter The Message");
      return false;
    }
    else if (inputData.Message.length > 200) {
      toast("Words Must be less than 200");
      return false;
    }
    

    await saveEnquiry(inputData)
      .then((res) => {
        if (res.status == 200) {
          history.pushState("/inputData", { inputData: inputData });
          console.log(res)
          toast("Submitted Successfully");
          setTimeout(() => window.location.reload(false), 3000);
          setDisable(true);
          
        }
        else {
          toast("fill the name");
        }
      })
      .catch((err) => {
        toast("fill the  Correct data");
        console.log(err);
      });

      emailjs.send('service_pbydzfi', 'template_9419o1l', inputData, 'No7xK7lazKQmS62b4')
      .then(function(response){
        toast("Message Send Successfully");
        console.log('SUCCESS!',response.status,response.text)
      },function(error){
        toast("Failed to Send Message");
        console.log("Failed...",error);
      }
      )

      
  }
  //console.log(inputData,"fhgjfhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  return (

    <Fragment>
      {/* <div className="col-sm-6 query_form">
              <p className="form_head"> Register Here And Avail The <span class="mini_text">Best Offers!!</span></p> */}
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Full Name*" name="Enter_Name" value={inputData.Enter_Name} onChange={getQuest} />
        <input type="tel" placeholder="Phone number*" name="Phone" value={inputData.Phone} onChange={getQuest} />
        <input type="text" placeholder="Your Email*" name="Email" value={inputData.Email} onChange={getQuest} />
      
        <select value={inputData.Location} name="Location" onChange={getQuest}>
          <option value="">Select Location*</option>
          <option value="Within City">Within City</option>
          <option value="Within India">Within India</option>
          <option value="Outside India">Outside India</option>
        </select>
        <textarea placeholder="Write a Message*" name="Message" value={inputData.Message} onChange={getQuest}></textarea>
        <div className="send_btn">
          <button disabled={disable} type="submit" value="GET A FREE QUOTE">SUBMIT  ENQUIRY</button>
          <p className="service_description">Home, Office, Car & Bike Relocation</p>
          <p className="service_description">No spam, No sharing , 100% Confidentiality</p>
        </div>
      </form>
      {/* </div> */}
    </Fragment>
  )
}

export default EnquiryComponent