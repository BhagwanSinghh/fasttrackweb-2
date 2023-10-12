import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviewsData = [
    {
      title: "Saagar Shah",
      rating: "5",
      review_desc: "I times",
    },
    {
      title: "Ajith Goswami",
      rating: "5",
      review_desc: "According to me, ",
    },
    {
      title: " I'm fully satisfied",
      rating: "5",
      review_desc:
        "I want to put it on record that I'm fully satisfied with the services provided by Retro Packers and Movers. The quality of their service is excellent and I shall recommend their service to many in my network",
    },
    {
      title: "dvwdv",
      rating: "5",
      review_desc: "wdqwcqw",
    },
    {
      title: "qwqvqw",
      rating: "4",
      review_desc: "erbewb",
    },
    {
      title: "Saagar Shah",
      rating: "4",
      review_desc: "I times",
    },
    {
      title: "Ajith Goswami",
      rating: "2",
      review_desc: "According to me, ",
    },
    {
      title: " I'm fully satisfied",
      rating: "3",
      review_desc:
        "I want to put it on record that I'm fully satisfied with the services provided by Retro Packers and Movers. The quality of their service is excellent and I shall recommend their service to many in my network",
    },
    {
      title: "dvwdv",
      rating: "1",
      review_desc: "wdqwcqw",
    },
    {
      title: "qwqvqw",
      rating: "2",
      review_desc: "erbewb",
    },
  ];
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
    return 3 * (ratee / reviewsData.length) * 100 + "px";
  };
  let width = (overallRatings / 5) * 100 + "px";
  const ratingStar = <FaStar color="#ffc107" style={{ margin: "3px 5px" }} />;

  const starRatingFunc = (parameter) => {
    return (
      <div style={{ display: "flex" }}>
        <li style={{ display: "flex" }}>
          {parameter} {ratingStar}
        </li>
        <div
          style={{
            height: "10px",
            width: 50 * 3 + "px",
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

  return (
    <div>import
      {/* <FaStar color="#ffc107" /> */}
      <div style={{ display: "flex" }}>
        <h3>
          Overall Ratings: {ratingStar} {"  "}
          {overallRatings.toFixed(1)}/5
        </h3>
        <div
          style={{
            width: width,
            height: "10px",
            backgroundColor: "#ffc107",
            margin: "30px 10px",
          }}
        ></div>
      </div>
      <h4>Ratings:</h4>
      <ul style={{ listStyle: "none" }}>
        {starRatingFunc(1)}
        {starRatingFunc(2)}
        {starRatingFunc(3)}
        {starRatingFunc(4)}
        {starRatingFunc(5)}
      </ul>
    </div>
  );
};

export default Reviews;
