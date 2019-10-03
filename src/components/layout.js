import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Wrapper = styled.main`
  display: grid;
  justify-items: center;
  align-items: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
