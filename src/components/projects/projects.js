import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { Section } from '../section/section';
import { ProjectsPanel } from '../projects-panel/projects-panel';

export const Projects = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const { web, apps, mobile } = props;

    return (
        <Section title="Projects">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Web" />
                <Tab label="Apps" />
                <Tab label="Mobile" />
            </Tabs>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <ProjectsPanel content={web} />
                <ProjectsPanel content={apps} />
                <ProjectsPanel content={mobile} />
            </SwipeableViews>
        </Section>
    );
};

const projectPosts = PropTypes.shape({
    node: PropTypes.shape({
        id: PropTypes.number,
        excerpt: PropTypes.string,
        frontmatter: PropTypes.shape({
            date: PropTypes.string,
            path: PropTypes.string,
            title: PropTypes.string,
            category: PropTypes.string,
        }),
    }),
});

Projects.propTypes = {
    mobile: projectPosts,
    apps: projectPosts,
    web: projectPosts,
};

Projects.defaultProps = {
    mobile: {},
    apps: {},
    web: {},
};

export default Projects;
