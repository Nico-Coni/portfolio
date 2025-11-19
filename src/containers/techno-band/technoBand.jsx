import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import ReduxLogo from '/assets/redux_logo.svg'
import RrLogo from '/assets/rr_logo.svg'
import './technoBand.scss'


export function TechnoBand() {
    return (
        <div className="techno-band standard-structure">
            <h2>Technologies</h2>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHtml5} />
                    <span>HTML5</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCss3Alt} />
                    <span>CSS3</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSass} />
                    <span>Sass</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faJs} />
                    <span>JavaScript</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact} />
                    <span>React</span>
                </li>
                <li>
                    <img src={RrLogo} alt="React Router Logo" className="techno-icon" />
                    <span>React Router</span>
                </li>
                <li>
                    <img src={ReduxLogo} alt="Redux Logo" className="techno-icon" />
                    <span>Redux</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                </li>
            </ul>
        </div>
    )
}   