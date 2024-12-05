import React from "react";
import '../styles/ProjectSection.css';
import { Link } from "react-router-dom";
import Footer from '../components/footer';
import { spider, delta, ecell, max, sigma, oedc, dc, naksh, psi, rmi, graphique, td, prof, fh, db, ever,scient } from "../assets";

const clubs = [
    {
        name: 'SPIDER',
        image: spider,
        credits: 0,
    },
    {
        name: 'E-CELL',
        image: ecell,
        credits: 0,
    },
    {
        name: 'GRAPHIQUE',
        image: graphique,
        credits: 0,
    },
    {
        name: 'SIGMA',
        image: sigma,
        credits: 0,
    },
    {
        name: 'EVER',
        image: ever,
        credits: 0,
    },
    {
        name: 'DELTA',
        image: delta,
        credits: 0,
    },
    {
        name: '180 DC',
        image: oedc,
        credits: 0,
    },
    {
        name: '3D AERODYNAMICS',
        image: td,
        credits: 0,
    },
    {
        name: 'FORCE HYPERLOOP',
        image: fh,
        credits: 0,
    },
    {
        name: 'MAXIMUS',
        image: max,
        credits: 0,
    },
    {
        name: 'PROFNITT',
        image: prof,
        credits: 0,
    },
    {
        name: 'RMI',
        image: rmi,
        credits: 0,
    },
    {
        name: 'PSI',
        image: psi,
        credits: 0,
    },
    {
        name: 'DESIGNERS CONSORTIUM',
        image: dc,
        credits: 0,
    },
    {
        name: 'NAKSHATRA',
        image: naksh,
        credits: 0,
    },
    {
        name: 'DATABYTE',
        image: db,
        credits: 0,
    }
];
const Dashboard = () => {
  return (
    <>
        <div className="project-section">
            <h2>CLUBS</h2>
            <div className="projects-grid">
                {clubs.map((club, index) => {
                    return (
                        <div 
                            key={index} 
                            className="project-item"
                             
                        >
                            <img src={club.image} alt='pics' />
                            <div className="projectname">{club.name}</div>
                            <div className="credits">Credits: {club.credits}</div>
                        </div>
                    );
                })}
            </div>
        </div>
        <Footer />
    </>
    );
};

export default Dashboard;
