import React from 'react'
// import bann from "../Image/contact_us_page_banner.png"
import { ToastContainer } from 'react-toastify';
import { IMAGE_PATH_URL } from '../constants/path';

function Contactus() {
  return (
    <>
    <ToastContainer/>
      <div class="container-fluid home_banner">
        <div class="container">
            <div class="row">
                <div class="col-12 banner_image">
                    <img src={IMAGE_PATH_URL+"contact_us_page_banner.png"} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contactus;