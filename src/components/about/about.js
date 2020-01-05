import React from 'react';
import { Grid } from '@material-ui/core';
import { Progress } from '../progress/progress';
import { Section } from '../section/section';

export const About = () => (
    <Section title="Experience">
        <Grid container>
            <Grid item md={10} lg={8}>
                <Progress title="Front-end Development" value={90} subskills={['HTML', 'CSS/SCSS/Less', 'JavaScript/Typescript', 'Angular', 'React', 'WordPress']} />
                <Progress title="Back-end Development" value={65} subskills={['NodeJS', 'Java', 'PHP', 'Go']} />
                <Progress title="Application Development" value={70} subskills={['NodeJS', 'Electron']} />
                <Progress title="Mobile Development" value={65} subskills={['Ionic', 'React native', 'Nativescript']} />
                <Progress title="Database" value={60} subskills={['MySQL', 'MongoDB']} />
                <Progress title="Build Tools" value={85} subskills={['Webpack', 'Grunt', 'Gulp']} />
                <Progress title="CI/CD" value={50} subskills={['Jenkins', 'Travis', 'Circle']} />
                <Progress title="CMS" value={95} subskills={['WordPress', 'Teamsite', 'ButterCMS', 'NetlifyCMS']} />
            </Grid>
        </Grid>
    </Section>
);

export default About;
