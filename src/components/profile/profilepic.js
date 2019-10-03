import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const RoundedImage = styled(Img)`
  margin: 50px;
  border-radius: 50%;
  @media (max-width: 768px ) {
    margin: 0;
  }
  animation: fadein 2s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <RoundedImage fixed={data.profilePic.childImageSharp.fixed} />
}

export default ProfilePic
