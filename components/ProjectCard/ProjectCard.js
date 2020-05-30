import React from 'react';
import "./ProjectCard.css"

import { useState } from 'react';
import { render } from 'react-dom';
import Project from "../Project/Project"


/*localStorage.setItem('projects', JSON.stringify([
   {
       projectTitle: "Black Box",
       projectDeadline: 87,
       projectTeam: ["Justin Kessler", "Jimmy Kessler", "Raymond Harmer", "Trevor Allison", "Kelsey Jones"],
       projectDescription: "Project Black Box is dedicated towards testing new Nano materials to go inside our cutting edge prosthetics.",
       projectTaskProgress: 70,
       projectID: 1


   },
   {
       projectTitle: "Other Test",
       projectDeadline: 87,
       projectTeam: ["Justin Kessler", "Jimmy Kessler", "Raymond Harmer", "Trevor Allison", "Kelsey Jones"],
       projectDescription: "This is just testing the other local storage data.",
       projectTaskProgress: 70,
       projectID: 2


   }, {
       projectTitle: "Black Box",
       projectDeadline: 87,
       projectTeam: ["Justin Kessler", "Jimmy Kessler", "Raymond Harmer", "Trevor Allison", "Kelsey Jones"],
       projectDescription: "Project Black Box is dedicated towards testing new Nano materials to go inside our cutting edge prosthetics.",
       projectTaskProgress: 70,
       projectID: 3


   },
   {
       projectTitle: "Black Box",
       projectDeadline: 87,
       projectTeam: ["Justin Kessler", "Jimmy Kessler", "Raymond Harmer", "Trevor Allison", "Kelsey Jones"],
       projectDescription: "Project Black Box is dedicated towards testing new Nano materials to go inside our cutting edge prosthetics.",
       projectTaskProgress: 70,
       projectID: 4


   }
]))*/




const ProjectCard = (props) => {


    const [projectRender, setRender] = useState(0);



    function renderHandler() {
        props.projectRender(props.projectID);
    }






    return (
        <div className="project-card-container" onClick={renderHandler}>

            <div className="project-card-title">{props.projectTitle}</div>
            <div className="project-card-deadline">87 Days Left</div>
            <div className="project-card-team-members"><p>Team :</p>
                <div className="card-member-icon icon1"></div>
                <div className="card-member-icon icon2"></div>
                <div className="card-member-icon icon3"></div>
                <p>+4</p>
            </div>
            <div className="project-card-description">Project Black Box is dedicated towards testing new Nano materials to go inside our cutting edge prosthetics.</div>
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