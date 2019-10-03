import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import ProjectStack from './projectstack'
import ProjectButtons from './projectbuttons'

const CardWrapper = styled.div`
    display: flex;
    flex-flow: column;
    background-color: white;
    max-width: 420px;
    min-width: 320px;
    padding: 20px;
    box-shadow: 0 0 7px grey;
    @media (max-width: 768px) {
        width: 320px;
    }
`
const CardImage = styled.img`
    height: 230px;
    object-fit: cover;
`
const ProjectBody = styled.div`
    padding-left: 2px;
    padding-right: 2px;
`

const ProjectTitle = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 32px;
    margin-bottom: 8px;
`

const ProjectDescription = styled.p`
    font-family: "montserrat", sans-serif;
    white-space: pre-line;
`

const ProjectCard = (props) => (
    <CardWrapper>
        <CardImage src={withPrefix(props.project.images[0])}/>
        <ProjectTitle>{props.project.title}</ProjectTitle>
        <ProjectBody>
            { props.project.techStack ? <ProjectStack techStack={props.project.techStack} index={props.index}/> : null }
            <ProjectDescription>{props.project.description}</ProjectDescription>
        </ProjectBody>
        <ProjectButtons links={props.project.links}/>
   </CardWrapper>
)

export default ProjectCard