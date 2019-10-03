import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const RoundedImage = styled(Img)`
  margin: 4px 6vw;
  border: 6px solid #1B4F72;
  @media (max-width: 900px ) {
    display: none !important;
  }
  animation: fadein 2s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

const AboutMePic = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "bucket.jpg" }) {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <RoundedImage fixed={data.profilePic.childImageSharp.fixed} />
}

export default AboutMePic
