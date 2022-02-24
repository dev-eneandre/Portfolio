import React from 'react'
import styled from "styled-components";
import DevFocus from ".././Images/Dev_focus.svg";
import "../styles/Home.css";
import Products from '../components/Products.js';
import Contact from './Contact';
import CV from "../files/Andre Ene Cv.pdf";
import About from './About';

function Home() {
  return (
    <Container>
        <Intro>
            <WordIntro>
              <p>Hello, My name is</p>
              <h3>Ene-Inyang Andre</h3>
              <p>
                I design and develop web services for customers of all kinds.
                I specialize in creating stylish, responsive and modern websites and
                web services for consumers.
              </p>
              <div className='skill-animation'>
                <div className='skill-text'>
                  React js & Redux<br></br> 
                  Html & Css <br></br>
                  Vanilla Js
                </div>
              </div>
              <ButtonWrap>
                <a href={CV} download>Andre's CV</a>
              </ButtonWrap>
            </WordIntro>
            <ImageWrap>
              <img src={DevFocus} alt="user profile" />
            </ImageWrap>
        </Intro>
        {/* About me component  */}
        <About />
        {/* Webstes i have created  */}
        <Products />
      {/* contact me  */}
      <Contact />
      </Container>
  )
}

export default Home

const Container = styled.div`
  background-color : #212121;
  max-width : 100vw;
  min-height : 100vh;
  padding-top : 10vh;
`
const Intro = styled.div`
  display : flex;
  min-height : 100vh;
  align-items : center;

    @media screen and (max-width : 768px){
      flex-direction : column-reverse;
    }

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12rem;
      height: 3.5rem;
      text-transform: uppercase;
      letter-spacing: 4px;
      border-radius: 1rem;
      font-size: 1.3rem;
      color: #d9d9d9;
      background-color: #7D398A;
      cursor: pointer;
    }
  `
  const WordIntro = styled.div`
    display : flex;
    flex-direction : column;
    flex: 1 1;
    align-items: start;
    justify-content: center;
    color : #d9d9d9;
    padding : 1rem 3rem;
      

    @media screen and (max-width: 680px){
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    p:nth-child(1){
      font-size: 2.5rem;
      font-weight: 300;
      display: block;

      align-items: center;
      justify-content: center;
      text-align: center;
      height : 100%;

      @media screen and (max-width: 680px){
        font-size : 1.7rem;
      }
    }

    h3{
      font-size: 3.5rem;
      width: 100%;
      font-weight: bold;

      @media screen and (max-width: 680px){
        font-size : 2.3rem;
      }
    }

    p:nth-child(3){
          font-size: 1.2rem;
          padding-top: 3rem;
          font-weight : 100;
          margin-bottom : 1rem;

          @media screen and (max-width: 680px){
            padding: 1rem;
            font-size : 1.2rem;
          }
      }
    }
  `
  const ImageWrap = styled.div`
    padding : 3rem 3rem 0rem 3rem;
    display : flex ;
    justify-content : center;
    flex : 1 1;
    position : relative;

    img{
      width : 100%;
      object-fit : contain;
    }
`
const ButtonWrap = styled.div`
margin-top : 2rem;
    a{
      text-decoration : none;
      font-weight : 700;
      font-size : 0.9rem
    }
`