import React from 'react'
import styled from 'styled-components'
import * as MaterialDesign from 'react-icons/md';

const StackWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25px);
`

const ProjectStack = (props) => (
    <StackWrapper>
        {props.icons.map((value) => (
            React.createElement(MaterialDesign[value])
        ))}
    </StackWrapper>
)

export default ProjectStack