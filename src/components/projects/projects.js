import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { ImgMediaCard } from '../card/card';

function TabPanel(props) {
    const { content } = props;

    const Posts = content
        .map((project) => <ImgMediaCard key={project.node.id} post={project.node} />);

    return (
        <div>
            {Posts}
        </div>
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

    const { web, apps } = props;

    return (
        <section>
            <Container>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Lorem" />
                    <Tab label="Ipsum" />
                    <Tab label="Doller" />
                </Tabs>
                <SwipeableViews
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel content={web} />
                    <TabPanel content={apps} />
                    <TabPanel content={web} />

                </SwipeableViews>
            </Container>
        </section>
    );
};

export default Projects;
