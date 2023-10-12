import React, { useState, useEffect, Fragment } from "react";
import { getAllReviewHome } from "../services/api/api.service";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ReviewAndRating = () => {
    const [reviewsData, setReviewsData] = useState([]);
    const getAllReviewResponse = () => {
        getAllReviewHome().then((e) => {
            if (e.data.status == "200") {
                setReviewsData(e.data.data);
            }
        });
    };
    useEffect(() => {
        getAllReviewResponse();
        // overAllStarRatings()
    }, []);
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
        <div class="container-fluid testimonials_area">
            <div class="container">
                <div class="row">

                    <h2>TESTIMONIAL</h2>
                    {reviewsData &&
                        reviewsData.length != 0 &&
                        reviewsData.filter((val) => val.rating == 5)
                            .map((e) => (
                                <div class="col-md-3">
                                    
                                    <div className="testimonial_box">
                                        <div className="review_title">
                                            <strong>{e.title}</strong>
                                        </div>
                                        {getStars(e.rating)}
                                        <div className="testimonial_height">“{e.review_desc}”</div>
                                        <h5>{e.name}</h5>
                                    </div>
                                </div>
                            ))}


                </div>
            </div>
        </div>
    )
}


export default ReviewAndRating