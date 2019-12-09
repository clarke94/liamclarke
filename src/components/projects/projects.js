import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Card from '../card/card';
import { Container } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
            <Card />
        </div>
    );
}

export const Projects = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

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
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>

                </SwipeableViews>
            </Container>
        </section>
    );
};

TabPanel.propTypes = {
    index: PropTypes.number,
    value: PropTypes.number,
    children: PropTypes.node.isRequired,
};

TabPanel.defaultProps = {
    index: 0,
    value: 0,
};

export default Projects;
