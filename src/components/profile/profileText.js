import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
    padding-right: 50px;
    @media (max-width: 768px) {
        grid-row: 2/2;
        padding-right: 0px;
    }
`

const Name = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 64px;
    text-align: right;
    @media (max-width: 768px) {
        text-align: center;
    }
`

const Subtitle = styled.h2`
    font-family: "montserrat", sans-serif;
    font-size: 32px;
    text-align: right;
    @media (max-width: 768px) {
        text-align: center;
    }
`

const ProfileText = () => (
    <TextWrapper>
        <Name>jayson yan</Name>
        <Subtitle>Software Developer</Subtitle>
    </TextWrapper>
)

export default ProfileText