import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import projects from '../projects'
import Project from './Project'
import ProjectsClass from './ProjectsClass'
import Background from './Background'
// import { Link } from 'react-router-dom'
// import { Row, Col } from 'antd'

export default function Projects() {
// Créer un composant qui va englober le composant ou l'on souhaite ajouter une classe sur le body
// au rendu du composant, ajout de la classe sur le body
// au démontage du composant, suppression de la classe sur le body
// dans le render, ajouter le children du composant, qui est au final le contenu du composant ou l'on souhaite mettre une classe sur le body

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesLength = projects.length

    const prevSlide = () => {
      setCurrentSlide( currentSlide === 0 ? slidesLength - 1 : currentSlide - 1)
    }

    const nextSlide = () => {
      setCurrentSlide( currentSlide === slidesLength - 1 ? 0 : currentSlide + 1)
    }
    
    const projectsList = projects.map((project, index) => {
        return (
          <Project
            key={project.id}
            isActive={index === currentSlide ? "project project__active" : "project"}
            title={project.title}
            type={project.type}
            year={project.year}
            description={project.description}
            picture={project.picture}
            link={project.link}
          />
        );
      });
      
    return (
      <ProjectsClass>
        <div className="App">
          <div className="container app-container">
              <Header/>
              <main className="carousel">
                <ul className="carousel__track">
                  {projectsList}
                </ul>
                <div className="carousel-btn-container">
                  <button className="carousel-btn carousel-btn--left" onClick={ prevSlide }><svg id="arrow" className="carousel-btn-arrow" data-name="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 9.6"><path d="M9.34,5.33,9,5.2V8.61H0v2.78H9V14.8l.32-.15h0L20,9.72Zm0,.63,5.54,2.25L9.34,10.78Z" transform="translate(0 -5.2)"/></svg></button>
                  <p className="carousel-project-number"><span>{`0${currentSlide + 1}`}</span> / {`0${slidesLength}`}</p>
                  <button className="carousel-btn carousel-btn--right" onClick={ nextSlide }><svg id="arrow" className="carousel-btn-arrow" data-name="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 9.6"><path d="M9.34,5.33,9,5.2V8.61H0v2.78H9V14.8l.32-.15h0L20,9.72Zm0,.63,5.54,2.25L9.34,10.78Z" transform="translate(0 -5.2)"/></svg></button>
                </div>
              </main>
              <Footer/>
          </div>
          <Background/>
        </div>
      </ProjectsClass>
    )
}
