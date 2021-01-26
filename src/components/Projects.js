import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import projects from '../projects'
import Project from './Project'
// import { Link } from 'react-router-dom'
// import { Row, Col } from 'antd'

export default function Projects() {
    const [projectsDisplay, setProjectsDisplay] = useState(projects);

    const projectsList = projects.map(project => {
        return (
          <Project
            key={project.id}
            title={project.title}
            type={project.type}
            year={project.year}
            description={project.description}
          />
        );
      });
      
    return (
        <div className="App">
            <div className="container app-container">
                <Header/>
                <main>
                    {projectsList}
                </main>
                <Footer/>
            </div>
            <div className="body-border"></div>
			<div className="noise"></div>
        </div>
    )
}