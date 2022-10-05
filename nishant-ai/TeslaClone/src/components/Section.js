import React from 'react'
import styled from "styled-components";

import Fade from 'react-reveal/Fade'

function Section(props) {
  return (
    <Wrap bgImage = {props.backgroundImg}>

        <Fade bottom>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
        </Fade>

        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>{props.leftBtnText}</LeftButton>
                    {   props.rightBtnText && // if rightBtnText Exists then only show this
                        <RightButton>{props.rightBtnText}</RightButton>
                    }
                </ButtonGroup>
            </Fade>

            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* vertical when flex switch else horizontal */
    align-items: center; /* horizontal when no flex else vertical */
`

const ItemText = styled.div`
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    margin-bottom: 30px;
    display: flex;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    margin: 8px;
    cursor: pointer;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 220px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
`

const RightButton = styled(LeftButton)`
    color: black;
    background-color: white;
    opacity: 0.65;
`

const DownArrow = styled.img`
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    margin-top: 20px;
    height: 40px;
`

const Buttons = styled.div`
`