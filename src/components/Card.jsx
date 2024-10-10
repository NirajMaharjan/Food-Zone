import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = (props) => {
  return (
    <Cards>
      <img src={props.image} alt="" />

      <div className="right">
        <div className="top">
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
        </div>
        <Button text={props.price}/>
      </div>
    </Cards>
  );
};

export default Card;

const Cards = styled.div`
  height: 167px;
  width: 100%;
  border: 0.66px #98f9ff;
  background-color: rgba(78, 78, 78, 0.5); /* #7ED321 with 70% opacity */
  backdrop-filter: blur(20px); /* Blur the background */
  border-radius: 20px;
  display: flex;
  gap: 18px;
  padding: 8px;

  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img{
    width: 133px;
    height: 133px;
    border-radius: 50%; /* This makes the image round */
    object-fit: cover; /* Ensures the image doesn't stretch or get distorted */
    display: block;
  }

  .title{

font-size: 16px;
font-weight: 600;
line-height: 19.36px;
text-align: left;

  }

  .top{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
