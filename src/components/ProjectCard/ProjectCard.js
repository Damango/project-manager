import React from 'react';
import "./ProjectCard.css"

import { useState } from 'react';
import { render } from 'react-dom';
import Project from "../Project/Project"




const ProjectCard = (props) => {


    const [projectRender, setRender] = useState(0);

    function renderHandler() {
        props.projectRender(props.projectID);

    }

    function teamDisplay() {
        let number = props.projectTeam.developers.length + props.projectTeam.engineers.length + props.projectTeam.designers.length + props.projectTeam.admins.length;
        if (number > 3) {
            return (<span>+{ number - 3}</span>)
        }
        else {
            return null
        }
    }

    return (
        <div className="project-card-container" onClick={renderHandler}>

            <div className="project-card-title">{props.projectTitle}</div>
            <div className="project-card-deadline">{props.projectDeadline} Days Left</div>
            <div className="project-card-team-members"><p>Team :</p>
                <div className="card-member-icon icon1"></div>
                <div className="card-member-icon icon2"></div>
                <div className="card-member-icon icon3"></div>
                <p className="team-expand-number">{teamDisplay()}</p>
            </div>
            <div className="project-card-description">{props.projectDescription}</div>
            <div className="project-card-task-progress">
                <div className="task-completion">Tasks : 7/13</div>
                <div className="task-progress-bar">
                    <div className="task-progress"></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;