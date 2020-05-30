import React from 'react';
import "./Project.css"
import ProjectTasks from "./ProjectTasks/ProjectTasks"


let data = JSON.parse(localStorage.getItem('projects'));

const Project = (props) => {


    function closeHandle() {
        props.closeHandler(0)
    }

    function theTest() {
        console.log(props.projectData.projectTitle)
    }




    return (
        <div className="project-container">
            <div className="project-nav-bar">
                <div className="close-project" onClick={closeHandle}><i className="fas fa-angle-left"></i></div>
                <div className="project-navigate-icons">
                    <div className="todo-icon fa-icon"><i className="far fa-list-alt"></i></div>
                    <div className="finance-icon fa-icon"><i className="fas fa-coins"></i></div>
                    <div className="team-icon fa-icon"><i className="fas fa-users"></i></div>
                </div>
            </div>
            <div className="project-views-wrapper">
                <div className="project-views-container">

                    <ProjectTasks projectTitle={props.projectData.projectTitle} />
                </div>
            </div>

        </div>
    );
}

export default Project;