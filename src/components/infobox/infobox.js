import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import style from './infobox.module.scss';
import { CardMedia } from '@material-ui/core';

export const Infobox = ({ post }) => (
    <Card classes={{ root: style.infobox }}>
        <Link to={post.frontmatter.path}>
            <CardMedia 
                classes={{ root: style.infobox__image }}
                image={post.frontmatter.featuredImage.childImageSharp.fluid.src}
            />
        </Link>
        <CardContent>
            <Link to={post.frontmatter.path}>
                <Typography gutterBottom variant="h5" component="h2">
                    {post.frontmatter.title}
                </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
                {post.excerpt}
            </Typography>
        </CardContent>
    </Card>
);

Infobox.propTypes = {
    post: PropTypes.shape({
        excerpt: PropTypes.string,
        frontmatter: PropTypes.shape({
            title: PropTypes.string,
            path: PropTypes.string,
        }),
    }).isRequired,
};

export default Infobox;
