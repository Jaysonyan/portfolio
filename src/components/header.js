import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: fixed;
  height: 64px;
  background-color: white;
  width: 100%;
`;

const NavigationLink = styled(Link)`
  margin: auto;
  top: 50%;
  transform: translateyiT(-50%);
  text-align: center;
  font-family: "Work Sans", monospace;
`

const Header = ({ siteTitle }) => (
  <NavigationWrapper>
    <NavigationLink to="/"> {siteTitle} </NavigationLink>
    <NavigationLink to="/"> about me </NavigationLink>
    <NavigationLink to="/"> projects </NavigationLink>
    <NavigationLink to="/"> resume </NavigationLink>
  </NavigationWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
