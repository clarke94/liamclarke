import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faSass,
    faJsSquare,
    faWordpress,
    faGulp,
    faGrunt,
    faAngular,
    faReact,
    faNodeJs,
    faJava,
    faPhp,
    faJenkins,
} from '@fortawesome/free-brands-svg-icons';
import { Container, Typography, Box } from '@material-ui/core';
import style from './tools.module.scss';

export const Tools = (props) => {
    const { tools } = props;

    const technologyUsed = (tech) => tools.filter((tool) => tool === tech).length;

    return (
        <>
            <Box component="div" pt={7}>
                <Typography variant="h3" component="span" display="block" align="center" classes={{ root: style.tools__heading }} gutterBottom>Technologies</Typography>
            </Box>
            <Container component="section" classes={{ root: style.tools__container }}>
                {technologyUsed('html5') ? <ToolsBlock icon={faHtml5} name="HTML 5" variant={style.tools__icon_html5} /> : null}
                {technologyUsed('scss') ? <ToolsBlock icon={faSass} name="SCSS" variant={style.tools__icon_scss} /> : null}
                {technologyUsed('javascript') ? <ToolsBlock icon={faJsSquare} name="JavaScript" variant={style.tools__icon_javascript} /> : null}
                {technologyUsed('wordpress') ? <ToolsBlock icon={faWordpress} name="WordPress" variant={style.tools__icon_wordpress} /> : null}
                {technologyUsed('gulp') ? <ToolsBlock icon={faGulp} name="Gulp" variant={style.tools__icon_gulp} /> : null}
                {technologyUsed('grunt') ? <ToolsBlock icon={faGrunt} name="Grunt" variant={style.tools__icon_grunt} /> : null}
                {technologyUsed('angular') ? <ToolsBlock icon={faAngular} name="Angular" variant={style.tools__icon_angular} /> : null}
                {technologyUsed('react') ? <ToolsBlock icon={faReact} name="React" variant={style.tools__icon_react} /> : null}
                {technologyUsed('nodejs') ? <ToolsBlock icon={faNodeJs} name="NodeJS" variant={style.tools__icon_nodejs} /> : null}
                {technologyUsed('java') ? <ToolsBlock icon={faJava} name="Java" variant={style.tools__icon_java} /> : null}
                {technologyUsed('php') ? <ToolsBlock icon={faPhp} name="PHP" variant={style.tools__icon_php} /> : null}
                {technologyUsed('jenkins') ? <ToolsBlock icon={faJenkins} name="Jenkins" variant={style.tools__icon_jenkins} /> : null}
            </Container>
        </>
    );
};

Tools.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ToolsBlock = (props) => {
    const { icon, name, variant } = props;

    return (
        <div className={style.tools__block}>
            <FontAwesomeIcon icon={icon} size="4x" className={variant} />
            <Typography variant="overline" gutterBottom>{name}</Typography>
        </div>
    );
};

ToolsBlock.propTypes = {
    variant: PropTypes.objectOf(PropTypes.any).isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Tools;
