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
];

const handleClick = (event) => {
    event.preventDefault(); // Prevent form submission
    window.location.assign('/userdashboard/days');
  };

const UserDashboard = () => {
  return (
    <>
        <div className="project-section">
            <h2>CLUB</h2>
            <div className="projects-grid">
                {clubs.map((club, index) => {
                    return (
                        <div 
                            key={index} 
                            className="project-item"
                            onClick={handleClick}
                             
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

export default UserDashboard;
