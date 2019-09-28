import React from 'react'
import styled from 'styled-components'
import TechIcon from './techicon'

const StackWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25px);
`

const ProjectStack = (props) => (
    <StackWrapper>
        {props.techStack.map((tech, index) => (
            <TechIcon type={tech.icon.substring(0, 2)} icon={tech.icon} title={tech.name} id={props.index+"-"+index} />
        ))}
    </StackWrapper>
)

export default ProjectStack