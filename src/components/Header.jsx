import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <Head>
        <div className="top">
          <h2>Foody Zone</h2>
          <input type="text" placeholder="Search Food..." />
        </div>


        <div className="buttons">
            <Button text="All"/>
            <Button text="Breakfast"/>
            <Button text="Lunch"/>
            <Button text="Dinner"/>
        </div>
      </Head>
    </>
  );
};

export default Header;






const Head = styled.header`
  width: 100vw;
  height: 241px;
  background-color: #323334;
  color: white;
  padding-top: 85px;
  padding-right: 120px;
  padding-left: 120px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
  }

  h2{
    font-weight: 700;
    font-size:32px;
  }

  input[type="text"] {
    width: 285px;
    height: 40px;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid #ff0909;
    background-color: transparent;
    
  }

  input:focus {
    outline: none;
    background-color: #ffffff;
  }

  @media screen and (max-width: 750px) {
    padding: 0;
    width: 100vw;
    margin:auto;
      gap: 24px;
      opacity: 0px;
      justify-content: center;
      padding-top: 24px;
      
      .top {
        width: 285px;
        height: 105px;
      flex-direction: column;
      gap: 24px;
      align-items: center;
    
    }
  }



  .buttons{
    display: flex;
    gap:14px;
    height: max-content;
  }
`;
