import React from 'react'
import '../../App.scss'
import '../../i18n.js'
import { Card } from '../../components/card/Card.jsx'
import data from '../../data/data.json'
import { Link } from 'react-router-dom'
import './ProjectList.scss'

function ProjectList() {
    const projects = Object.values(data);

    return (
        <div className="projects">
            <h2 className='projectsTitle'>Projets</h2>
            <div className="project-list">

                {projects.map(project => (
                    <Link to={`/project/${project.id}`}>
                        <Card key={project.id} project={project}></Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProjectList