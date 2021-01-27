import React from 'react'
// import { Link } from "react-router-dom"
import { Col, Row } from 'antd'

// import photo from '../img/pics/photo1.png'

export default function Project({title, type, year, description, picture, link}) {
    return (
    
        <li className="project">
            <Row justify="space-between" className="project-container">
                <Col xs={24} md={12} lg={11}>
                    <figure className="project-img-container">
                        <img className="project-img" src={require(`../img/pics/${picture}`).default} alt=""/>
                    </figure>
                </Col>
                <Col xs={24} md={12} lg={10}>
                    <h2 className="title title--home">{ title }</h2>
                    <h3 className="title title--sub">{ type } - { year }</h3>
                    <p>{ description }</p>
                    <a className="btn" href={link} target="_blank" rel="noreferrer">Voir le projet</a>
                </Col>
            </Row>
        </li>
    )
}

