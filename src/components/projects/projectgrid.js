import React from 'react';
import styled from 'styled-components'
import ProjectCard from './projectcard';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    justify-items: center;
`

const ProjectGrid = (props) => (
    <Grid>
        {props.projects.map((value, index) => (
            <ProjectCard img={"https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"}/>
        ))}
    </Grid>
)

export default ProjectGrid