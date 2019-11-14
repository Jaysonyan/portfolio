import React from 'react'
import styled from 'styled-components'
import TechIcon from './techicon'

const StackWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25px);
`

const ProjectStack = ({ techStack, index }) => (
    <StackWrapper>
        {techStack.map((tech, iconIndex) => (
            <TechIcon type={tech.icon.substring(0, 2)} icon={tech.icon} title={tech.name} id={index+"-"+iconIndex} />
        ))}
    </StackWrapper>
)

export default ProjectStack