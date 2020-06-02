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
        projectID: 1,
        project_todos: [
            {
                todo_title: "Take out the Trash",
                todo_description: "Really understandable",
                category: "Life",
                time: "4h 56m",
                taskID: 1

            },
            {
                todo_title: "Build API",
                todo_description: "create a useful api for everyone to be good at",
                category: "Development",
                taskID: 2
            }
        ],
        project_inProgress: [
            {
                inProgress_title: "Build super moon",
                inProgress_description: "Really hard to do but im sure you can get it done",
                category: "Design",
                time: "1h 2m",
                taskID: 3
            }
        ],
        project_stuck: [
            {
                stuck_title: "Just really here being stuck",
                stuck_description: "Can't really see it getting much worse than this",
                category: "Development",
                time: "22m",
                taskID: 4
            }
        ],
        project_complete: [
            {
                complete_title: "Smoking that phat gas",
                complete_description: "I always knew I could do it",
                category: "Engineering",
                time: "59m",
                taskID: 5
            }
        ]


    }
]))*/




const ProjectCard = (props) => {


    const [projectRender, setRender] = useState(0);



    function renderHandler() {
        props.projectRender(props.projectID);

    }


    function teamDisplay() {


        let number = props.projectTeam.length;


        if (props.projectTeam.length > 3) {
            return ("+" + number)
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