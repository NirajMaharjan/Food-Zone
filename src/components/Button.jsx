import React from 'react'
import styled from 'styled-components'

const Button = ({text}) => {
  return (
    <Btn>
        {text}
    </Btn>
  )
}

export default Button;


const Btn = styled.button`
    background-color: #FF4343;
    color: white;
    border: none;
    border-radius: 5px;
    width: max-content;
    padding:6px 12px;
    cursor: pointer;

    &:hover{
        background-color: #fa2424;
    }

`
