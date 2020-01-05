import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Box } from '@material-ui/core';
import { Infobox } from '../infobox/infobox';
import style from './projects-panel.module.scss';

export const ProjectsPanel = (props) => {
    const { content } = props;

    const Posts = content
        .map(
            (project) => (
                <Grid key={project.node.id} item xs={12} sm={6} md={4} lg={4}>
                    <Infobox post={project.node} />
                </Grid>
            ),
        );

    return (
        <Container classes={{ root: style.projectsPanel__container }}>
            <Grid container spacing={3}>
                {Posts}
            </Grid>
        </Container>
    );
};


const projectPosts = PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
        id: PropTypes.string,
        excerpt: PropTypes.string,
        frontmatter: PropTypes.shape({
            date: PropTypes.string,
            path: PropTypes.string,
            title: PropTypes.string,
            category: PropTypes.string,
        }),
    }),
}));

ProjectsPanel.propTypes = {
    content: projectPosts,
};

ProjectsPanel.defaultProps = {
    content: {},
};

export default ProjectsPanel;
