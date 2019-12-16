import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

export const ImgMediaCard = ({ post }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Link to={post.frontmatter.path}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.frontmatter.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {post.excerpt}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default ImgMediaCard;
