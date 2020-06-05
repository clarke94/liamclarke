import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Section } from '../section/section';

export const About = () => (
    <Section title="About">
        <Grid container justify="center">
            <Grid item md={10} lg={8}>
                <Typography variant="body1" align="center" gutterBottom>
                    Hello! I&apos;m Liam, a Software Engineer with more than 5 years
                    experience based in Edinburgh, UK. I build applications that
                    live on the internet, whether that is web, desktop, mobile
                    and anything in between.
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Currently I work for PayPal as a Software Engineer, specialising
                    in building micro services in Go and user interfaces in Angular.
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    In my spare time I am a Moderator for the Treehouse online
                    learning platform, moderating the community forums ensuring
                    all questions are answered. As well as that I do Software
                    freelance work and Software volunteer work for non-profit
                    businesses.
                </Typography>
            </Grid>
        </Grid>
    </Section>
);

export default About;
