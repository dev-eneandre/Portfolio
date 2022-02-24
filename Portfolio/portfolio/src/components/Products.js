import React from 'react'
import styled from 'styled-components'
import Sites from '../components/Sites';

function Products() {
  return (
    <Container>
        <Texts>
            <Title>Create Magic With Andre</Title>
            <Caption> Beautiful sites at your finger tips, lets work together.
            </Caption>
        </Texts>

        <Sites />

    </Container>
  )
}

export default Products;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 7rem 5rem;


    @media screen and (max-width: 1000px){
        padding: 5rem 3rem;
    }    
`
const Texts = styled.div`
    color  : #d9d9d9;
    
    @media screen and (max-width: 480px){
        width: 100%;
    }
`
const Title = styled.h4`
    font-size: 3.2rem;
    font-weight: 500;

    @media screen and (max-width: 768px){
     font-size : 2.5rem;
    }
    `
const Caption = styled.p`
    font-size : 0.6rem;
    margin: 1rem 0px;
    letter-spacing : 1px;

    @media screen and (max-width: 480px){
       display: none;
    }
`