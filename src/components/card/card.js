import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const useStyles = makeStyles({
    card: {
        height: '100%',
    },
});

export const ImgMediaCard = ({ post }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
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
};

export default ImgMediaCard;
