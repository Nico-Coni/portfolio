import './card.scss'
export function Card({ project }) {
    return (
        <div className="card">
            <div className="card-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            <img src={project.image} alt={project.title} />
        </div>
    )
}