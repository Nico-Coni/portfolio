import React from 'react'
import linkedinIcon from '../../assets/linkedinIcon.svg'
import githubIcon from '../../assets/githubIcon.svg'
import { useTranslation } from 'react-i18next'
import './navbar.scss'
import '../../components/LanguageSwitcher.jsx'
import { Link } from 'react-router-dom'

export function Navbar() {
    const { t } = useTranslation()
    return (
        <nav className='navbar standard-structure'>
            <ul className='navbar-list'>
                <li><Link to="/">{t("Home")}</Link></li>
                <li><Link to="/projects">{t("Projects")}</Link></li>
                <a
                    href="https://www.linkedin.com/in/nicolas-morin-79486b1b0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedinIcon} alt="Linkedin" />
                </a>
                <a
                    href="https://github.com/Nico-Coni"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubIcon} alt="Github" />
                </a>
            </ul>
        </nav>
    )
}