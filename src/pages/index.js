import React from "react"
import styled, { keyframes } from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePic from "../components/profile/profilePic"
import ProfileText from "../components/profile/profileText"

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5px 1fr;
  height: 100vh;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 3fr;
    justify-items: center;
  }
`
const drawLine = keyframes`
    0% {
      height: 0px;
    }
    100% {
      height: 400px;
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
