import React from 'react'
import styled from 'styled-components'



const Header = () => {
  return (
    <>
        <Head>
            <div className="top">
            <h2>Foody Zone</h2>
            <input type="text" placeholder='Search Food...' />

            </div>
        </Head>
    </>
  )
}

export default Header


const Head = styled.header`

    width:100vw;
    height:241px;
    background-color: #323334;
    color: white;
    padding-top: 85px;
    padding-right: 120px;
    padding-left: 120px;
    display: flex;
    justify-content: space-between;

    .top{
        display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    }

    input[type="text"]{
        width: 285px;
        height: 40px;
        padding-left: 15px;
        border-radius: 5px;
        border: 1px solid #FF0909;
        background-color: #dadada;
    }

    input:focus{
        outline: none;
        background-color: #ffffff;
    }
`