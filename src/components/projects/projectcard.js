import React from 'react'
import styled from 'styled-components'
import ProjectStack from './projectstack'

const CardWrapper = styled.div`
    background-color: yellow;
    width: 400px;
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
        <ProjectStack icons={["MdAllOut", "MdAllOut", "MdAllOut"]}/>
        <ProjectDescription>This is a long description</ProjectDescription>
    </CardWrapper>
)

export default ProjectCard