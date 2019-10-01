import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import AboutData from '../data/aboutme'

const AboutMeWrapper = styled.div`
    width: 85%;
    padding-top: 64px;
    padding-bottom: 64px;
`
const AboutMeTitle = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 64px;
    padding-bottom: 32px;
`
const AboutMeBody = styled.p`
    font-family: "montserrat", sans-serif;
    font-size: 24px;
    white-space: pre-line;
`

const AboutMe = () => (
    <Layout>
        <AboutMeWrapper>
            <AboutMeTitle>About Me</AboutMeTitle>
            <AboutMeBody>{AboutData.body}</AboutMeBody>
        </AboutMeWrapper>
    </Layout>
)

export default AboutMe