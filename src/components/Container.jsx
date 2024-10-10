import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/05cbb526-0d28-40ce-b825-ea4e9b8250fb")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.foods);
      }); //bcoz response is in object format {'foods':[{},{}...]}
  }, []);

  return (
    <Main>

    
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}

     
    </Main>
  );
};

export default Container;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  padding: 64px 120px 0px;
  background-image: url("/images/bg.png"); /* Reference image from public folder */
  background-size: cover;
  background-position: center;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(340px,1fr));
  grid-gap: 32px 20px;
  justify-content: center;
  justify-items: center;
`;
