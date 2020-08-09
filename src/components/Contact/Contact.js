import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import contactStyle from './ContactStyle';
import { FaMediumM } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

/* https://www.linkedin.com/in/marie-thielens */

const Contact = () => {

function lienGithub() {
    alert('kljlkj');
}

return (
    <>
        <Container maxWidth="lg">
            <h1>Prenez contact avec moi</h1>
            <div>
                <p>Si vous souhaitez me contacter, me parler d'un projet de collaboration ou simplement m'envoyer une bonne blague, envoyez un email à thielens.marie@gmail.com</p>
            </div>
            <div>
                <p style={contactStyle.mesReseaux}>Mes réseaux sociaux</p>
            </div>
            <div>
                <Button style={contactStyle.boutonGris} onClick={lienGithub}><AiFillGithub />Github</Button>
                <Button style={contactStyle.boutonLinkedin}>Linkedin</Button>
                <Button style={contactStyle.boutonMedium}><FaMediumM />Medium</Button>
            </div>
        </Container>
    </>
)
}
export default Contact;