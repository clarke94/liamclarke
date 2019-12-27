import React from 'react';
import { Grid } from '@material-ui/core';
import Progress from '../progress/progress';
import Section from '../section/section';

export const About = () => {

    return (
        <Section title="About">
            <Grid container>
                <Grid item md={10}>
                    <Progress title="Front-end Development" value={80} subskills={['HTML', 'CSS/SCSS', 'JavaScript', 'Angular', 'React', 'WordPress']} />
                    <Progress title="Back-end Development" value={65} subskills={['NodeJS', 'Java', 'PHP']} />
                    <Progress title="Application Development" value={60} subskills={['NodeJS', 'Electron']} />
                    <Progress title="Mobile Development" value={65} subskills={['Ionic', 'React native', 'Nativescript']} />
                    <Progress title="Database" value={60} subskills={['MySQL', 'MongoDB']} />
                    <Progress title="CI/CD" value={50} subskills={['Jenkins', 'Travis', 'Circle']} />
                    <Progress title="CMS" value={90} subskills={['WordPress', 'Teamsite', 'ButterCMS', 'NetlifyCMS']} />
                </Grid>
            </Grid>
        </Section>
    );
};

export default About;
