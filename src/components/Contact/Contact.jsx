import React from 'react';

import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ContactStyle from './ContactStyle';
import { FaMediumM } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

/* https://www.linkedin.com/in/marie-thielens */

const Contact = props => {
    const { classes } = props;

function lienGithub() {
    alert('kljlkj');
}

return (
    <>
        <div className="balises bodyB">&lsaquo;body&rsaquo;</div>

        <Container className={classes.container} maxWidth="lg">
            <h1 className="balises">Prenez contact avec moi</h1>
            <div>
                <p>Si vous souhaitez me contacter, me parler d'un projet de collaboration ou simplement m'envoyer une bonne blague, envoyez un email à thielens.marie@gmail.com</p>
            </div>
            <div>
                <p style={classes.mesReseaux}>Mes réseaux sociaux</p>
            </div>
            <div>
                <Button style={classes.boutonGris} onClick={lienGithub}><AiFillGithub />Github</Button>
                <Button style={classes.boutonLinkedin}>Linkedin</Button>
                <Button style={classes.boutonMedium}><FaMediumM />Medium</Button>
            </div>
        </Container>
    </>
)
}
export default withStyles(ContactStyle)(Contact);