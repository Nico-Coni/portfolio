import React from 'react'
import DownCurve from '../../components/downCurve.jsx'
import UpCurve from '../../components/upCurve.jsx'
import { Carousel } from '../carousel/carousel.jsx'
import './projects.scss'

export function Projects() {
    return (
        <div className="projects-container">
            <DownCurve
                color="white"
                className="Curve"
            />
            <Carousel />
            <UpCurve
                color="white"
                className="Curve"
            />
        </div>
    )
}