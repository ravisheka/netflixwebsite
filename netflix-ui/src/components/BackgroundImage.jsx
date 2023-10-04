import React from 'react'
import background from "../assets/login.jpg"
import styled from 'styled-components'
function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt='background'/>
    </Container>
  );
}

export default BackgroundImage
const Container = styled.div`
height:110vh;
width:110vw
img{
    height:100vh;
    width:100vw;
}`;