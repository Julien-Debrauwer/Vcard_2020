import React from 'react'
import { Link } from "react-router-dom"
import { Col, Row } from 'antd'

export default function Project({title, type, year, description}) {
    return (
        <Row justify="space-between">
            <Col xs={24} md={12} className="project">
                <h2 className="title title--home">{ title }</h2>
			    <h3 className="title title--sub">{ type } - { year }</h3>
                <p>{ description }</p>
            </Col>
        </Row>
    )
}

