import React from 'react';
import styled from "styled-components";
import Profile from ".././Images/profile.png";


function About() {
  return (
   <Container>
      <AboutMe>
            <ProfileImg>
              <img src={Profile} alt="Andre Ene's Picture" />
            </ProfileImg>
            <ProfileText>
                <h4>About Me</h4>
                <p>I am Ene-Inyang Andre, A programmer with great 
                  knowledge in using React Js & Redux to bring your dream 
                  projects to life.
                </p>
            </ProfileText>
        </AboutMe>
   </Container>
  )
}

export default About;

const Container = styled.div`
  padding-top : 15vh;
`
const AboutMe = styled.div`
  display : flex;
  min-height : 50vh;
  padding : 2rem 0rem;

  @media screen and (max-width : 768px){
    flex-direction : column;
  }
`
const ProfileImg = styled.div`
    padding : 3rem;
    display : flex ;
    justify-content : center;
    flex : 1 1;
    position : relative;

    img{
      width : 60%;
      object-fit : contain;
      box-shadow : 0 4px 10px 0 rgba(102, 102, 102, 0.2) , 0 6px 20px 0 rgba(102, 102, 102, 0.2) ;
    }

  
`
const ProfileText = styled.div`
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
      
      h4{
        padding-top : 1rem;
        font-size : 1.6rem;
      }

      p{
        font-size: 1.2rem;
        padding-top: 2rem;
        font-weight : 100;
        color : #d9d9d9;

        @media screen and (max-width: 680px){
          padding: 1rem;
          font-size : 1.1rem;
        }
      }
     
`