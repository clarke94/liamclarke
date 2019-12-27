import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container, Grid, Box } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { ImgMediaCard } from '../card/card';
import Section from '../section/section';

function TabPanel(props) {
    const { content } = props;

    const Posts = content
        .map((project) =>
            <Grid key={project.node.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                <ImgMediaCard post={project.node} />
            </Grid>);

    return (
        <Container>
            <Box py={2}>
                <Grid container spacing={3}>
                    {Posts}
                </Grid>
            </Box>
        </Container>
    );
}

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
                <TabPanel content={web} />
                <TabPanel content={apps} />
                <TabPanel content={mobile} />
            </SwipeableViews>
        </Section>
    );
};

export default Projects;