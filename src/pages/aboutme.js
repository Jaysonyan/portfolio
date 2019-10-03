import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import AboutMePic from '../components/aboutme/aboutmepic'
import AboutData from '../data/aboutme'

const AboutMeWrapper = styled.div`
    width: 85%;
    padding-top: 32px;
    padding-bottom: 48px;
`
const AboutMeTitle = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 64px;
    padding-bottom: 32px;
`
const AboutMeBody = styled.p`
    font-family: "montserrat", sans-serif;
    font-size: 24px;
    font-weight: 600;
    white-space: pre-line;
    align-self: center;
`

const AboutMeContent = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-content: center;
`

const AboutMe = () => (
    <Layout>
        <SEO title="About Me"/>
        <AboutMeWrapper>
            <AboutMeTitle>About Me</AboutMeTitle>
            <AboutMeContent>
                <AboutMePic/>
                <AboutMeBody>{AboutData.body}</AboutMeBody>
            </AboutMeContent>
        </AboutMeWrapper>
    </Layout>
)

export default AboutMe