import React, { Fragment, useEffect, useState } from "react";
import { saveReview, getAllReview } from "../../services/api/api.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import image_3 from "../../../public/images/image_3.jpg";
// import { FaStar } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReviewMobile from "./reviewMobile";
import ReviewBanner from '../../assets/review_banner.jpg';
import { result } from "lodash";
import { IMAGE_PATH_URL } from "../../constants/path";

// import Reviews from "./ShowRatings";

const ShowRating = ({ rating }) => {
  const [star, setStar] = useState([]);

  useEffect(() => {
    let eachData = [];
    for (let eachRating = 0; eachRating < parseInt(rating); eachRating++) {
      eachData.push(eachRating);
    }
    setStar(eachData);
    console.log("=======", eachData);
  }, []);
  return (
    <Fragment>
      {star &&
        star.map((e) => {
          return (
            <span>
              <i class="fa fa-star color_yellow" aria-hidden="true"></i>
            </span>
          );
        })}
    </Fragment>
  );
};

// Component for read more functionality on long text. Just wrap your text with this component

const ReadMore = ({ children }) => {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, 100) : text;
  function toggleIsTruncated() {
    setIsTruncated(!isTruncated)
  }
  return (
    <p>{resultString}
      <span onClick={toggleIsTruncated} className="truncatation">
        {isTruncated ? "Read More" : "Read Less"}
      </span>
    </p>
  )
}

const Ratingss = () => {
  const List = { title: "", rating: "", review_desc: "", name: "", created_at: "14/5/2023" };
  const [inputReview, setInputReview] = useState(List);

  // const [data, setData] = useState([]); 
  const [reviewsData, setReviewsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [num, setNum] = useState(1);

  const [ratingg, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  const filterbyNumber = (data, num) => {
    return data.filter((e, i) => i < 10 * num)
  }
  //   --------------------------------Show Rating Section -----------------

  // calculate overall ratings
  const totalRatings = reviewsData.length;
  const sumOfRatings = reviewsData.reduce(
    (acc, review) => acc + parseInt(review.rating),
    0
  );
  const overallRatings = sumOfRatings / totalRatings;

  const ratings = Array(5).fill(0);
  reviewsData.forEach((review) => {
    ratings[parseInt(review.rating) - 1]++;
  });
  const newWidth = (ratee) => {
    return (150 / reviewsData.length) * ratee + "px";
    // return 3 * (ratee / reviewsData.length) * 100 + "px";
  };
  //   (150/reviewsData.length)*ratee +"px"
  let width = (overallRatings / 5) * 100 + "px";
  const ratingStar = (parameter) => (
    <Rating
      color="#ffc107"
      style={{ margin: "3px 5px" }}
      name="read-only"
      value={parameter}
      readOnly
      precision={0.5}
    />
  );
  <Rating name="read-only" value={value} readOnly />;
  // <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue)}}/>

  // <Rating name="half-rating" defaultValue={2.5}  />

  console.log(List);

  const starRatingFunc = (parameter) => {
    return (
      <div style={{ display: "flex", margin: "5px" }}>
        <li style={{ display: "flex" }}>
          {parameter}
          {ratingStar(parameter)}
          {/* <StarIcon style={{ color: "#ffc107" }} /> */}
        </li>
        <div
          style={{
            height: "10px",
            width: "150px",
            backgroundColor: "lightgrey",
            marginTop: "7px",
          }}
        >
          <div
            style={{
              width: newWidth(ratings[parameter - 1]),
              height: "10px",
              backgroundColor: "#ffc107",
            }}
          ></div>
        </div>
        <span style={{ marginLeft: "3px" }}>({ratings[parameter - 1]})</span>
      </div>
    );
  };

  // -----
  console.log(ratingg, hover);

  const getAllReviewResponse = () => {
    getAllReview().then((e) => {
      if (e.data.status == "200") {
        setReviewsData(e.data.data);
      }
    });
  };
  useEffect(() => {
    getAllReviewResponse();
    // overAllStarRatings()
  }, []);

  const getData = (e) => {
    setInputReview({
      ...inputReview,
      [e.target.name]: e.target.value,
    });
  };

  console.log(inputReview, "hoiooiiiiiiiiiii");

  const handleReview = (e) => {
    e.preventDefault();
    if (inputReview.name == "") {
      toast.error("Please Enter Your Name");
      return false;
    }
    if (inputReview.title == "") {
      toast.error("Please Enter the Review Title");
      return false;
    }
    if (inputReview.review_desc == "") {
      toast.error("Please Enter The Review Description");
      return false;
    }
    if (inputReview.rating == "") {
      toast.error("Please Select Rating");
      return false;
    }

    saveReview(inputReview)
      .then((res) => {
        if (res.data.status == "200") {
          getAllReviewResponse();
          toast.success("Submitted Successfully");
          setInputReview(List);
          setShowModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(reviewsData, inputReview, "dataaaaaaaaaaaaaa");

  const [value, setValue] = React.useState(5);

  //   useEffect(() => {

  //   }, [handleReview]);
  const overAllStarRatings = () => {
    return Number(overallRatings.toFixed(1)) >= 0 ? (
      <Rating
        name="half-rating-read"
        defaultValue={Number(overallRatings.toFixed(1))}
        precision={0.1}
        readOnly
      />
    ) : null;
  };
  const [updateRating, setUpdateRating] = useState(null);
  useEffect(() => {
    setUpdateRating(overAllStarRatings());
  }, [reviewsData]);

  //   -------------
  // const ratingElement = document.getElementById("starElement");
  // const computedStyle = window.getComputedStyle(ratingElement);
  // const starColor = computedStyle.getPropertyValue("color");
  // const allIn=window.getComputedStyle(document.getElementById("starElement")).getPropertyValue("color")
  // document.addEventListener("DOMContentLoaded", function() {
  //     const allIn = window.getComputedStyle(document.getElementById("starElement")).getPropertyValue("color");
  //     console.log(allIn,"starColor");
  //   });

  const [color, setColor] = useState("#ffc107");

  useEffect(() => {
    setTimeout(() => {
      reviewsData;
      const ratingElement = document.getElementById("starElement");
      const computedStyle = window.getComputedStyle(ratingElement);
      const colorr = computedStyle.getPropertyValue("color");
      console.log(colorr, "colorss");
      //   setColor(colorr)
    }, 1000);
  }, []);
  console.log(color, "color");
  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<span><StarBorderIcon style={{ color: "#ffc107" }} /></span>);
      } else {
        stars.push(<span><StarIcon style={{ color: "#ffc107" }} /></span>);
      }
    }
    return stars;
  }


  return (
    <Fragment>
      {/* {color && <p>The color is: {color}</p>} */}
      {/* {color=="#ffc107"? setColor("#ffc107"):null} */}

      {/* {allIn} */}
      { }
      {/* <Rating name="half-rating" defaultValue={2.5} color="#ffc107" /> */}
      {/* <Rating/> */}
      {/* <ReactStarsRating/> */}
      {/* <FaStar /> */}
      {/* <Reviews/> */}
      {/* <FaStar/> */}
      <div className="container-fluid home_banner">
        <div className="container container_fullWidth">
          <div className="row">
            <div className="col-12 banner_image">
              <img src={IMAGE_PATH_URL+"image_3.jpg"} alt="" />
            </div>
            <div className="col-12 review_content">
              <h2>Reviews & Ratings</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container_fluid">
        <img width="100%" src={ReviewBanner}/>
      </div> */}
      <ToastContainer />
      <div className="container rating_container">
        
        <div className="rating_box">
          <div>
            <div style={{ display: "flex" }}>
              <h3>
                Overall Ratings: {updateRating}
                {"  "}
                {overallRatings.toFixed(1)}/5
              </h3>
              {/* <li>
                <div
                  style={{
                    width: "150px",
                    backgroundColor: "lightgrey",
                    height: "10px",
                  }}
                >
                  <div
                    style={{
                      width: width,
                      height: "10px",
                      backgroundColor: "#ffc107",
                      // margin: "30px 10px",
                    }}
                  ></div>
                </div>
              </li> */}
            </div>
            <h4
              style={{
                textDecoration: "none",
                marginLeft: "4px",
                color: "grey",
              }}
            >
              {overallRatings.toFixed(1)}{" "}
              <span style={{ textDecoration: "underline" }}>Ratings</span>
              {"  "}
              {totalRatings}{" "}
              <span style={{ textDecoration: "underline" }}>Reviews</span>
            </h4>
            <ul style={{ listStyle: "none" }}>
              <div style={{ marginLeft: "4px" }}>{starRatingFunc(5)}</div>
              {starRatingFunc(4)}
              {starRatingFunc(3)}
              {starRatingFunc(2)}
              {starRatingFunc(1)}
            </ul>
          </div>
          <div className="mobile_review_form">
            <ReviewMobile handleReview={handleReview} inputReview={inputReview} getData={getData} Rating={Rating} showModal={showModal} setShowModal={setShowModal} />
          </div>
         
        </div>
        <div class="comment">
          <form onSubmit={handleReview}>
            <h2>Write a Review</h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputReview.name}
              onChange={getData}
            />
            <input
              type="text"
              placeholder="Review Title"
              name="title"
              value={inputReview.title}
              onChange={getData}
            />
            <textarea
              placeholder="Review Description"
              name="review_desc"
              value={inputReview.review_desc}
              onChange={getData}
            ></textarea>
            <Rating
              value={inputReview.rating}
              onChange={getData}
              name="rating"
              size="large"
            />
            <div class="star">
              <input type="submit" value="write review" />
            </div>
          </form>
        </div>
        
      </div>
      <div className="container rating_container_box">


        <h2>Review & Rating</h2>
        {reviewsData &&
          reviewsData.length != 0 &&
          filterbyNumber(reviewsData, num).map((e) => (

            <div class="review" key={e.id}>
              {getStars(e.rating)}
              {/* <Rating
                  id="starElement"
                  name="read-only"
                  value={e.rating}
                  color="#ffc107"
                  readOnly
                /> */}
              {/* <Rating
                  style={{ margin: "3px 5px", color: "#ffc107" }}
                  name="read-only"
                  value={5}
                  readOnly
                /> */}
              <div className="review_title">
                {e.title}
              </div>

              {/* <span>{e.review_desc.length <= 100?"":"see more"}</span> */}


              <div>
                {e.review_desc.length > 200 ? <ReadMore>{e.review_desc}</ReadMore> : <p>{e.review_desc}</p>}
              </div>


              <span>by {e.name} on {e.created_at.split(" ")[0].split("-").reverse().join("/")}</span>

            </div>
          ))}
        {num * 10 < reviewsData.length &&
          <button className="review_seemore" onClick={() => setNum(num + 1)}>See More</button>
        }
      </div>    
    </Fragment>
  );
};
export default Ratingss;
