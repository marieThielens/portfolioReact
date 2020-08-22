import React from 'react';

import AboutStyle from './AboutStyle';
import { withStyles } from '@material-ui/core'; // npm install @material-ui/styles
import Container from '@material-ui/core/Container';

const About = props => {
    const { classes } = props
    return(
    <>
    <div className="balises bodyB">&lsaquo;body&rsaquo;</div>
    <Container className={classes.containerAbout} maxWidth="lg">
        <div>
            <h1>A propos de moi</h1>
        </div>
        <section className={classes.blockPiramide}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>

    </Container>
    <div className="balises balisesFermeture"><span>&lsaquo;/body&rsaquo;</span> <br />&lsaquo;/html&rsaquo;</div>
    </>
)
}
export default withStyles(AboutStyle)(About);