import React from 'react';

import AboutStyle from './AboutStyle';
import { withStyles } from '@material-ui/core'; // npm install @material-ui/styles
import Container from '@material-ui/core/Container';

const About = props => {
    const { classes } = props
    return(
    <>
    <div className="balises bodyB">&lsaquo;body&rsaquo;</div>
    <Container className={classes.container} maxWidth="lg">
        <h1>A propos de moi</h1>
    </Container>
    <div className="balises balisesFermeture"><span>&lsaquo;/body&rsaquo;</span> <br />&lsaquo;/html&rsaquo;</div>
    </>
)
}
export default withStyles(AboutStyle)(About);