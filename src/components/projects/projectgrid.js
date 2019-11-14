import React from 'react';
import styled from 'styled-components'
import ProjectCard from './projectcard';
import Projects from '../../data/projectdata';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-row-gap: 24px;
    grid-column-gap: 24px;
    justify-items: center;
`

const ProjectGrid = () => (
    <Grid>
        {Projects.map((value, index) => (
            <ProjectCard project={value} index={index}/>
        ))}
    </Grid>
)

export default ProjectGrid