import React, { Profiler } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import ProfilePic from "../components/profile/profilePic"
import SEO from "../components/seo"
import ProfileText from "../components/profile/profileText"

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 100vh;
  padding: 20%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileWrapper>
      <ProfileText/>
      <ProfilePic/>
    </ProfileWrapper>
  </Layout>
)

export default IndexPage
