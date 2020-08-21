import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';


const ProjectSinglePage = props => {

    const [ article, envoyerArticle ] = useState(null)

return (
    <>
        <div className="project">
            <Link to={props.lien} >
                <div>
                    <img src={props.image } alt="p"/>
                </div>
                <div className="titre">{props.titre}</div>
                <div className="categorie">{props.categorie}</div>
            </Link>
        </div>
    </>
)
} 
export default ProjectSinglePage;