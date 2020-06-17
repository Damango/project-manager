import React from 'react';
import "./ProjectSettings.css"
import { animated, useSpring } from 'react-spring'

const ProjectSettings = (props) => {

    const animateSettings = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200 } })
    let data = JSON.parse(localStorage.getItem('projects'));


    function deleteTheProject() {
        let i;
        for (i = 0; i < data.length; i++) {
            if (data[i].projectID === props.projectID) {
                console.log(data.splice(i, 1));
                localStorage.setItem('projects', JSON.stringify(data));
                props.update(props.updateData + 1);

            }
        }
    }


    return (
        <animated.div style={animateSettings} className="settings-container">
            <div className="project-title">{props.projectTitle} - Settings</div>
            <button className="delete-project" onClick={deleteTheProject}>DELETE PROJECT</button>
        </animated.div>
    );
}

export default ProjectSettings;