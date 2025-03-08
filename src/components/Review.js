import React from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Review = ({ stars, reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    const number = stars + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="icon" />
        ) : stars >= number + 0.5 ? (
          <BsStarHalf className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <ReviewWrapper>
      <h3>Customer Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="review-header">
            <strong>{review.reviewerName}</strong>
            <span className="date">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          <div className="stars">{ratingStar}</div>
          <p className="comment">"{review.comment}"</p>
        </div>
      ))}
    </ReviewWrapper>
  );
};

const ReviewWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 2px solid #ddd;
  width: 100%;

  .review {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }

  .review-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  .date {
    color: gray;
    font-size: 0.9rem;
  }

  .stars {
    color: gold;
    margin: 5px 0;
  }

  .star {
    font-size: 1.2rem;
  }

  .comment {
    font-style: italic;
    color: #444;
  }
`;

export default Review;
