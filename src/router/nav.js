import React from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projet/Project';
import Contact from '../components/Contact/Contact';
 
/* importer mes icones */
import { AiOutlineHome, AiOutlineUser, AiOutlineEye, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import {  GrContact } from 'react-icons/gr';
import { RiMediumLine } from 'react-icons/ri'
/* utiliser react-router-dom pour la navigation */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routes = [
    { path:'/', component: Home, exact: true },
    { path:'/about', component: About, exact: true },
    { path: '/projects', component: Projects, exact: true },
    { path: '/contact', component: Contact, exact: true }
];

const NavPrincipale = () => (

        <Router>
            <nav style={styles.containerNav}>
                <ul >
                    <li><Link to="/"><AiOutlineHome /></Link></li>
                    <li><Link to="/about"><AiOutlineUser /></Link></li>
                    <li><Link to="/projects"><AiOutlineEye /></Link></li>
                    <li><Link to="/contact"><GrContact /></Link></li>
                </ul>
                <ul>
                    <li><Link to="www.linkedin.com/marie-thielens"><AiOutlineLinkedin /></Link></li>
                    <li><Link to="https://github.com/marieThielens"><AiFillGithub /></Link></li>
                    <li><Link to =""><RiMediumLine /></Link></li>
                </ul>
            </nav>
            <Switch>
                {routes.map((chemin, index) =>(
                    <Route
                        key={index}
                        path={chemin.path}
                        exact={chemin.exact}
                        component={chemin.component}
                    />
                ))}                    
            </Switch>
        </Router>

)
export default NavPrincipale;

const styles = {
    containerNav: {
        backgroundColor: '#181818', 
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between', 
        height:'100%'
    }
}