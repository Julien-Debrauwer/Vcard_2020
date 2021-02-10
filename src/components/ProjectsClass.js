import { useEffect } from 'react'

export default function ProjectsClass(props) {
    useEffect(() => {
        document.body.classList.add('projects-page')
        return function cleanup() {
            document.body.classList.remove('projects-page')
        };
    });
    return (
        props.children
    )
}
