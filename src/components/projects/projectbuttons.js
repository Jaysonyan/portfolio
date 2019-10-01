import React from 'react'
import styled from 'styled-components'

const ButtonSection = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
`

const ButtonsWrapper = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-gap: 16px;
`

const Button = styled.a`
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    font-family: "montserrat", sans-serif;
    font-weight: 800;
    transition: 0.3s;
    opacity: 0.5;
    :hover {
        opacity: 1;
    }
`

const ProjectButtons = (props) => (
    <ButtonSection>
        <ButtonsWrapper>
            {props.links.map((value) => (
                <Button href={value.link}>
                    {value.name}
                </Button>
            ))}
        </ButtonsWrapper>
    </ButtonSection>
)

export default ProjectButtons