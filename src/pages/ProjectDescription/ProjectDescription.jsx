import React from 'react'
import '../../App.scss'
import '../../i18n.js'
import './ProjectDescription.scss'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import githubIcon from '../../assets/githubIcon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function ProjectDescription() {
    const projects = Object.values(data);
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));

    return (
        <div className="project-description standard-structure">
            <h2>{project.title}</h2>
            <div className='container'>
                <img className="image-project" src={project.image} alt={project.title} />
                <div className="details">
                    <p className='objectives-description'>{project.description}</p>
                    <h3 className='objectives-title'>Objectifs du projet :</h3>
                    <ul className='objectives-list'>{project.objectives.map((objective, index) =>
                        <li className='objectives-item' key={index}>{objective}</li>
                    )}
                    </ul>
                    <div className='project-links'>
                        {project.link && (
                            <a href={project.link}>
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDescription