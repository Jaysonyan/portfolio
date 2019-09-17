import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const RoundedImage = styled(Img)`
  border-radius: 50%;
`

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <RoundedImage fixed={data.profilePic.childImageSharp.fixed} />
}

export default ProfilePic
