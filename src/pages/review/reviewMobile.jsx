import React from 'react';
import { useState } from 'react';
import { Button , Modal} from 'react-bootstrap';
import "./index.css";

const ReviewMobile = ({handleReview,inputReview,getData,Rating,showModal,setShowModal}) => {
    
  return (
    <>
    {/* <!-- Button trigger modal --> */}
<Button style={{backgroundColor: "#f9a634",marginBottom:'7%'}} onClick={() => setShowModal(true)}>
  Add Review
</Button>

{/* <!-- Modal --> */}
<Modal show={showModal}>
    <Modal.Header>
     Thanks, Your Feedback Matters for Us.
    </Modal.Header>
    <Modal.Body>
        <div className="comment">
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
              <input type="submit" value="Submit Review" />
            </div>
          </form>
          </div>
    </Modal.Body>
    <Modal.Footer>
        <Button style={{backgroundColor:"red"}} onClick={() => setShowModal(false)}>cancel</Button>
    </Modal.Footer>
</Modal>
    </>
  )
}

export default ReviewMobile;