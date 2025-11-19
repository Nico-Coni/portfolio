import './carousel.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import projectsData from '../../data/data.json'
import { Link } from 'react-router-dom'

export function Carousel() {
    const pictures = Object.values(projectsData).map(project => ({
        title: project.title,
        image: project.image,
        id: project.id
    }))

    const picturesCount = pictures.length
    const [currentIndex, setCurrentIndex] = useState(0)
    const index = currentIndex % picturesCount
    const [isFading, setIsFading] = useState(false)
    const [displayedIndex, setDisplayedIndex] = useState(0)

    // Precharge les images pour éviter le changement de taille lors du chargement
    useEffect(() => {
        pictures.forEach((image) => {
            const img = new Image()
            img.src = image
        })
    })

    // Utiliser % pour éviter les erreurs d'index
    // et pour permettre le passage de la dernière à la première image
    function next() {
        setIsFading(true)
        setTimeout(() => {
            setDisplayedIndex((currentIndex + 1) % picturesCount)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % picturesCount)
            requestAnimationFrame(() => {
                setIsFading(false)
            })
        }, 300)
    }

    function prev() {
        setIsFading(true)
        setTimeout(() => {
            setDisplayedIndex((currentIndex - 1 + picturesCount) % picturesCount)
            setCurrentIndex((prevIndex) => (prevIndex - 1 + picturesCount) % picturesCount)
            setIsFading(false)
        }, 300)
    }

    return (
        <div className='carousel-container'>
            <button onClick={prev} className='carousel-button left'><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="carousel-image">
                <Link to={`/project/${pictures[displayedIndex].id}`}>
                    <img
                        src={pictures[displayedIndex].image}
                        key={index}
                        alt={pictures[displayedIndex].title}
                        className={`img-carousel ${isFading ? 'fade' : ''}`}
                    />
                </Link>
            </div>
            <button onClick={next} className='carousel-button right'><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    )
}