import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header>
            <nav>
                <Link className="studio-container" to="/">
                    <h2 className="title title__logo"><span className="title__logo--yellowletter">J</span><span className="mobile-logo-invisible">ulien</span> <span className="title__logo--yellowletter">D</span><span className="mobile-logo-invisible">ebrauwer</span></h2>
                </Link>   
                <ul className="menu">
                    <li className="menu--el"><Link className="menu-link" to="/">Accueil</Link></li>
                    <li className="menu--el"><Link className="menu-link" to="/projets">Projets</Link></li>
                </ul>
            </nav>
        </header>
    )
}
