import React from 'react'
// import { Link } from "react-router-dom"
import { Col, Row } from 'antd'


export default function Project({isActive, title, type, year, description, picture, link}) {
    return (
        <li className={isActive}>
            <Row className="project-container">
                <Col xs={16} sm={14} md={8} lg={8} className="project-col project-col__left">
                    <figure className="project-img-container">
                        <img className="project-img" src={require(`../img/pics/${picture}`).default} alt=""/>
                    </figure>
                </Col>
                <Col xs={24} sm={20} md={12} lg={10} className="project-col project-col__right">
                    <h2 className="title title--home">{ title }</h2>
                    <h3 className="title title--sub">{ type } - { year }</h3>
                    <p>{ description }</p>
                    <a className="btn" href={link} target="_blank" rel="noreferrer">Voir le projet</a>
                </Col>
            </Row>
        </li>
    )
}

