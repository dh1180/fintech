import React, { Component } from 'react'
import styled from "styled-components" 

const Button = styled.button`
-webkit-box-shadow: 5px -26px 15px 5px #000000; 
box-shadow: 5px -26px 15px 5px #000000;
`
const StyleldComponent = () => {
    return(
    <div>
        <Button>
            스타일드 컴포넌트로 만든 페이지
        </Button>
    </div>
    )
}

export default StyleldComponent