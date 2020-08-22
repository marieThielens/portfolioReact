import React, { useState } from 'react';
import ProjectSinglePage from './ProjetSinglePage';
import ProjectStyle from './ProjectStyle';
import { data } from './data';
import { withStyles } from '@material-ui/core'; // npm install @material-ui/styles
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const Projects = props => {

    const { classes } = props;
    // variable d'état qui met à jour le dom
    const [ articles , envoiArticle] = useState(data); // avoir accès à mes données du fichier data
    const [ categories, envoiChoixCategorie] = useState('ToutMontrer'); // Avoir accès aux différentes cathégorie 

    // Montrer les articles, boucle
    const resultatArticle = data.map((articles) => <li className={classes.containerProject} key={articles.id}><h2>{articles.titre}</h2><p></p><img src={articles.image}/></li>);
   // console.log(resultatArticle);

    // Choisir quelle(s) catégorie d'article(s) on montre
    const choisirCategorieArticle = choisirCategorieArticle =>  {
       
        envoiChoixCategorie(choisirCategorieArticle)
        let nouveauTableauData = [];
        if (choisirCategorieArticle === 'ToutMontrer'){
            nouveauTableauData = data;
        }
        else {
            data.forEach(project => {
              
                if (project.categorie.indexOf(choisirCategorieArticle) >= 0){  
                    nouveauTableauData.push(project)
                  //  console.log(nouveauTableauData);
                  
                }
            });
        }
        envoiArticle(nouveauTableauData)
    }


return (
    <>
    <div className="balises bodyB">&lsaquo;body&rsaquo;</div>
    <Container maxWidth="lg">
        <h1>Mes réalisations</h1>
        <p>Venez découvrir les différents projets et tutoriels sur lesquels j'ai travaillé.</p>

        <div className={classes.containerBouton}>
            <Button className={classes.bouton}>Tout montrer</Button>
            <Button className={classes.bouton} onClick={() => choisirCategorieArticle('html') }>HTML</Button>
            <Button className={classes.bouton}>React</Button>
            <Button className={classes.bouton}>WordPress</Button>
            <Button className={classes.bouton}>Tutos</Button>
        </div>
        <div className={classes.papaProject}>{resultatArticle}</div>
    </Container>
    <div className="balises balisesFermeture"><span>&lsaquo;/body&rsaquo;</span> <br />&lsaquo;/html&rsaquo;</div>



    

        <div className="project">


            
            <ProjectSinglePage 
            lien="/gabySalsaZumba"
            image="https://img.huffingtonpost.com/asset/5c93860b240000ad064ed810.jpeg?ops=scalefit_630_noupscale"
            titre="Site de Gaby"
            categorie="Wordpress"
            />
            <ProjectSinglePage 
            lien="/githubPage"
            image="https://static.collishop.be/wcsstore/ColruytB2CCAS/JPG/JPG/646x1000/std.lang.all/45/12/asset-1974512.jpg"
            titre="Comment avoir une github page ?"
            categorie="Tutoriel"
            />
        </div>
    </>
)
} 
export default withStyles(ProjectStyle)(Projects);