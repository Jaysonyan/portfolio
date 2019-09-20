import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    background-color: yellow;
    width: 400px;
    height: 800px;
    padding: 8px;
`
const CardImage = styled.img`
`

const ProjectTitle = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 32px;
`

const ProjectDescription = styled.p`

`

const ProjectCard = (props) => (
    <CardWrapper>
        <CardImage src={props.img}/>
        <ProjectTitle>ShowTracker</ProjectTitle>
        <ProjectDescription>This is a long description</ProjectDescription>
    </CardWrapper>
)

export default ProjectCard