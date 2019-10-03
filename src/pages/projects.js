import React from 'react';
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import ProjectGrid from '../components/projects/projectgrid';

const ProjectWrapper = styled.div`
    width: 85%;
    padding-top: 3%;
    padding-bottom: 3%;
    @media(max-width: 768px) {
        width: 100%;
    }
`

const ProjectTitle = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: 64px;
    padding-bottom: 32px;
    @media(max-width: 768px) {
        padding-left: 16px;
    }
`

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <ProjectWrapper>
            <ProjectTitle>Projects</ProjectTitle>
            <ProjectGrid/>
        </ProjectWrapper>
    </Layout>
)

export default ProjectsPage