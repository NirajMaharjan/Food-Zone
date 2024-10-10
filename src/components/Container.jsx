import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Card from './Card';



const Container = () => {
    const [data,setData] = useState([]);


    useEffect(() => {
  fetch('https://run.mocky.io/v3/05cbb526-0d28-40ce-b825-ea4e9b8250fb')
    .then(response => response.json())
    .then(jsonData => {
        setData(jsonData.foods)});  //bcoz response is in object format {'foods':[{},{}...]}
        
}, []);

    
  return (  
    <Main>
        <ul>

        {data.map((item,index) => (
            <li key={index}>{item.price}</li>
        ))}
        </ul>
        <Card />
    </Main>
  )
}

export default Container


const Main = styled.div`
    width:100%;
    height:100vh;
    padding: 0;
    margin: 0;
    background-image: url('/images/bg.png'); /* Reference image from public folder */
  background-size: cover;
  background-position: center;
  color: white;

`