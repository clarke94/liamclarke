import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import style from './infobox.module.scss';

export const Infobox = ({ post }) => (
    <Card classes={{ root: style.infobox }}>
        <Link to={post.frontmatter.path} aria-label={post.frontmatter.title}>
            <Img
                className={style.infobox__image}
                fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                alt={post.frontmatter.title}
                fadeIn
            />
        </Link>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                </Link>
            </Typography>
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
            featuredImage: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                    fluid: PropTypes.shape({
                        src: PropTypes.string,
                    }),
                }),
            }),
        }),
    }).isRequired,
};

export default Infobox;
