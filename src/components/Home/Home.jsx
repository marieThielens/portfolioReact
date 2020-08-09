import React from 'react';

import HomeStyle from './HomeStyle';
import { withStyles } from '@material-ui/core'; // npm install @material-ui/styles
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';



const Home = props => {
        const { classes } = props;

return(
        <>
        <div className="balises bodyB">&lsaquo;body&rsaquo;</div>
        <Container className={classes.containerHome} maxWidth="lg" >

                        <div className={classes.blockGauche}>
                                <h1 className={classes.intro}>Bienvenue ! <br /> Je m'appelle Marie Thielens <br /> et je suis web developer.</h1>
                                <p className={classes.gris}>Front End Developper / React / Wordpress</p>
                                <Button className={classes.bouton} variant="outlined">Venez voir mon travail</Button> 
                        </div>
                        <img className={classes.newMarieImage} src="../../img/NewSuperMarie.png" alt="Logo super Marie" />
        </Container>
        <div className="balises balisesFermeture"><span>&lsaquo;/body&rsaquo;</span> <br />&lsaquo;/html&rsaquo;</div>
        </>
)
}
export default withStyles(HomeStyle)(Home);


