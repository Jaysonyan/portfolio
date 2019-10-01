import React from 'react';
import styled from 'styled-components'

import Layout from '../components/layout'
import ProjectGrid from '../components/projects/projectgrid';

const ProjectWrapper = styled.div`
    width: 85%;
    padding-top: 64px;
    padding-bottom: 64px;
`

const ProjectTitle = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 64px;
    padding-bottom: 32px;
`

const ProjectsPage = () => (
    <Layout>
        <ProjectWrapper>
            <ProjectTitle>Projects</ProjectTitle>
            <ProjectGrid/>
        </ProjectWrapper>
    </Layout>
)

export default ProjectsPage