import React from 'react';
import ProjectSinglePage from './ProjetSinglePage';


const Projects = props => {


return (
    <>
        <p>Venez découvrir les différents projets et tutoriels sur lesquels j'ai travaillé.</p>
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
export default Projects;