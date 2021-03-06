import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  position: sticky;
  height: 64px;
  width: 100%;
  top: 0px;
  background-color: #F5F5F5;
  z-index: 1;
`;

const NavigationLink = styled(Link)`
  text-align: center;
  font-family: "montserrat", sans-serif;
  font-weight: 600;
  text-decoration: none;
  outline: none;
  color: black;
`

const ExternalNavLink = styled.a`
  text-align: center;
  font-family: "montserrat", sans-serif;
  font-weight: 600;
  text-decoration: none;
  outline: none;
  color: black;
`

const Header = () => (
  <NavigationWrapper>
    <NavigationLink to="/"> jayson </NavigationLink>
    <NavigationLink to="/aboutme"> about me </NavigationLink>
    <NavigationLink to="/projects"> projects </NavigationLink>
    <ExternalNavLink href="/Resume.pdf"> resume </ExternalNavLink>
  </NavigationWrapper>
)

export default Header
