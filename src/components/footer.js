import React from 'react';
import { Link } from "react-router-dom";
import { getAllPages } from '../services/api/api.service'

const Footer = () => {
  const [pages, setPages] = React.useState([])
  React.useEffect(()=>{
    getAllPages()
    .then((e)=>{
      if(e.data.status == 200) {
        setPages(e.data.data)
      }
    })
  },[])
    return(
        <div className="container-fluid footer_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>RETRO PACKERS AND MOVERS. PVT. LTD</h2>
              <p>
              We, Retro Packers and Movers Pvt Ltd. are a technology-driven- Packers & Movers Company in India with an experience of more than 25 years in the field of logistics. The organization is registered in the Ministry of Govt. affairs (MCA) CIN NO-U52293DL2023PTC410940, TANS NO-DELR45400F and is certified in ISO 9001:2015.

              </p>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <h2>USEFUL LINKS</h2>
              <ul className="other_links">
              {pages
                    .filter((e)=>e.page_type == 'content')
                    .map((e)=><li><Link to={`/content/${e.page_slug}`}>{e.page_title}</Link></li>)}
              </ul>
            </div>
             
          </div>
        </div>
      </div>
    )
};

export default Footer;
