import React from 'react'
import styled from 'styled-components'
import { IoLogoLinkedin, IoMdMail, IoIosDocument, IoLogoGithub } from 'react-icons/io'

const TextWrapper = styled.div`
    padding-right: 50px;
    @media (max-width: 768px) {
        grid-row: 2/2;
        padding-right: 0px;
    }
    animation: fadein 2s;
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
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

const IconWrapper = styled.div`
    width: 400px;
    display: grid;
    float: right;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: right;
    @media (max-width: 768px) {
        justify-items: center;
        width: 350px;
    }
`

const Icon = styled.a`
    color: black;
    opacity: 0.8;
    transition: 0.3s;
    :hover {
        opacity: 1;
    }
`

const ProfileText = () => (
    <TextWrapper>
        <Name>jayson yan</Name>
        <Subtitle>Software Developer</Subtitle>
        <IconWrapper>
            <Icon href="https://www.linkedin.com/in/jayson-yan">
                <IoLogoLinkedin size={32}/>
            </Icon>
            <Icon href="https://www.github.com/Jaysonyan">
                <IoLogoGithub size={32}/>
            </Icon>
            <Icon href="mailto:jaysonjyan@gmail.com">
                <IoMdMail size={32}/>
            </Icon>
            <Icon href="Resume.pdf">
                <IoIosDocument size={32}/>
            </Icon>
        </IconWrapper>
    </TextWrapper>
)

export default ProfileText