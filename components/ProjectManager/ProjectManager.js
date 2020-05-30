import React from 'react';
import "./ProjectManager.css";
import ProjectCard from "../ProjectCard/ProjectCard"
import Project from "../Project/Project"
import { useState } from 'react';

const ProjectManager = (props) => {



    const [projectState, setProjectState] = useState(JSON.parse(localStorage.getItem('projects')))




    return (
        <div className="project-manager-container">


            <div className="cards-container">
                <button className="create-project-button">Create Project +</button>

                {projectState.map((project) => <ProjectCard key={project.projectID} projectRender={props.viewHandler} projectTitle={project.projectTitle} projectID={project.projectID} />)}


            </div>
        </div>
    );
}

export default ProjectManager;