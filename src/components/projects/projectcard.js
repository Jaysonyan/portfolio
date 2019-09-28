import React from 'react'
import styled from 'styled-components'
import ProjectStack from './projectstack'

const CardWrapper = styled.div`
    background-color: white;
    width: 400px;
    padding: 24px;
    box-shadow: 0 0 7px grey;
`
const CardImage = styled.img`
`
const ProjectBody = styled.div`
    padding-left: 4px;
    padding-right: 4px;
`

const ProjectTitle = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 32px;
    margin-bottom: 8px;
`

const ProjectDescription = styled.p`
    font-family: "montserrat", sans-serif;
`

const ProjectCard = (props) => (
    <CardWrapper>
        <CardImage src={props.img}/>
        <ProjectTitle>{props.project.title}</ProjectTitle>
        <ProjectBody>
            { props.project.techStack ? <ProjectStack techStack={props.project.techStack} index={props.index}/> : null }
            <ProjectDescription>{props.project.description}</ProjectDescription>
        </ProjectBody>
   </CardWrapper>
)

export default ProjectCard