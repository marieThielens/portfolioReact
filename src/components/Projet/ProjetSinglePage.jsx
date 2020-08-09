import React from 'react';
import { Link } from 'react-router-dom';


const ProjectSinglePage = props => {

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