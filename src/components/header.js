import { set } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE_PATH_URL } from "../constants/path";
import { getAllPages } from '../services/api/api.service'


const Header = () => {
  const [data, setData] = useState(false)
  const [pages, setPages] = useState([])
  useEffect(()=>{
    getAllPages()
    .then((e)=>{
      if(e.data.status == 200) {
        setPages(e.data.data)
      }
    })
  },[])
  let lrNumberInLocal=localStorage.getItem('LrNumber')


  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "fix_header" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `container-fluid header_section ${sticky}`;
  


  // useEffect(()=>{
    
  // },[])
  return (
    <div className={classes} >
      <div className="container">
        <div className="row">
          <div className="col-sm-2 header_logo">
            <img className=" animate__animated animate__backInLeft" src={IMAGE_PATH_URL+"logo.png"} alt="Retro Packers and Movers" />
          </div>
          {/*  */}
          <button onClick={() => setData(!data)} id="menu_icon"><i class="fa fa-bars" aria-hidden="true"></i></button>
          {/*  */}
          {/* className={`myClass ${index ? "active" : ""}`} */}
          {/* {data ? "" : */}
          <div className={data ? 'col-sm-10 nav_menu responsive animate__animated animate__backInRight' : 'col-sm-10 nav_menu animate__animated animate__backInRight'}>
            {/* <div className="col-sm-8 nav_menu"> */}
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-home" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link> </li>
              <li>
                <Link to="/about-us">About</Link> </li>
              <li>
                <Link to={'#'}>Services</Link>
                  <ul>
                    {pages
                    .filter((e)=>e.page_type == 'services')
                    .map((e)=><li onClick={() => setData(false)}><Link to={`/services/${e.page_slug}`}>{e.page_title}</Link></li>)}
                  </ul>
                </li>
              <li>
                <Link to="/contact-us">Contact us</Link></li>

              <li>
                {
                  lrNumberInLocal===null? <Link to="/login">Find Documents</Link>:<Link to="/ConsignerDetails">Find Documents</Link>
                }
                {/* <Link to="/login">Login</Link> */}
                </li>
                <li>
                <Link to="/review">Review</Link></li>
              <li>
                
                <div className="header_btn">
                  <Link to="/contact-us">Get A Quote</Link>
                </div>
              </li>
              
            </ul>
          </div>
          <div className="header_btn_responsive">
            <Link to="/contact-us">Get A Quote</Link>
          </div>
          {/* } */}
        </div>
      </div>
    </div>
  );
};

export default Header;
