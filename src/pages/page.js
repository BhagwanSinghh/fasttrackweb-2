import React, { useEffect, useState } from "react";
// import Client from "../Image/client_page_banner.png"
import { pageDetails } from '../services/api/api.service'
import { useParams } from "react-router-dom";
import { IMAGE_PATH_URL } from "../constants/path";
function Page() {
    const [pageData, setPageData] = useState({})
    const { page_name } = useParams()
  
    useEffect(()=>{
      pageDetails(page_name)
      .then((e)=>{
        if(e.data.status == 200 && e.data.data.length != 0) {
          setPageData(e.data.data[0])
        }
      })
    },[page_name])
  return (
    <div class="container-fluid home_banner">
         <img src={IMAGE_PATH_URL+"client_page_banner.png"} alt="" />
    <div class="container">
        <div class="row">
            
            <div class="col-12 banner_content">
                <h2>{pageData.page_title}</h2>
               
            </div>
            <div class="col-12 page_content">
            <div dangerouslySetInnerHTML={{__html: pageData.short_description}}></div>
            <div dangerouslySetInnerHTML={{__html: pageData.long_description}}></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Page;