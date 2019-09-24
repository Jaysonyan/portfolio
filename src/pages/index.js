import React from "react"
import styled, { keyframes } from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePic from "../components/profile/profilepic"
import ProfileText from "../components/profile/profiletext"

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 5px 5fr;
  height: calc(100vh - 64px);
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 2fr;
    justify-items: center;
  }
`
const drawLine = keyframes`
    0% {
      height: 0px;
      opacity: 0.2;
    }
    100% {
      height: 400px;
      opacity: 1.0;
    }
`

const Line = styled.div`
   animation: ${drawLine} 1s forwards;
   width: 5px;
   background-color: #000;
   @media (max-width: 768px) {
     display: none;
   }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileWrapper>
      <ProfileText/>
      <Line/>
      <ProfilePic/>
    </ProfileWrapper>
  </Layout>
)

export default IndexPage
