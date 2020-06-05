import React from 'react';
import { Grid } from '@material-ui/core';
import { Progress } from '../progress/progress';
import { Section } from '../section/section';

export const Experience = () => (
    <Section title="Experience">
        <Grid container>
            <Grid item md={10} lg={8}>
                <Progress title="Front-end" value={90} subskills={['HTML', 'CSS/SCSS/Less', 'JavaScript/Typescript', 'Angular/NGRX', 'React/Redux', 'WordPress']} />
                <Progress title="Back-end" value={75} subskills={['Go', 'NodeJS', 'Java', 'PHP']} />
                <Progress title="Desktop Apps" value={50} subskills={['NodeJS', 'Electron']} />
                <Progress title="Mobile" value={65} subskills={['Ionic', 'React native', 'Nativescript']} />
                <Progress title="Database" value={60} subskills={['PostgreSQL', 'MySQL', 'MongoDB']} />
                <Progress title="Build Tools" value={85} subskills={['Webpack', 'Grunt', 'Gulp']} />
                <Progress title="CI/CD" value={60} subskills={['Jenkins', 'Travis', 'Circle']} />
                <Progress title="CMS" value={95} subskills={['WordPress', 'Teamsite', 'ButterCMS', 'NetlifyCMS']} />
            </Grid>
        </Grid>
    </Section>
);

export default Experience;
