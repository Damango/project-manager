import React from 'react';
import "./ProjectManager.css";
import ProjectCard from "../ProjectCard/ProjectCard"
import Project from "../Project/Project"
import { useState } from 'react';
import BuildModal from "../BuildModal/BuildModal"

const ProjectManager = (props) => {



    const [projectState, setProjectState] = useState(JSON.parse(localStorage.getItem('projects')))

    const [projectModal, setProjectModal] = useState(0);


    function newProjectHandler() {
        setProjectState(JSON.parse(localStorage.getItem('projects')));
    }


    function modalHandler() {
        setProjectModal(1)

    }

    function handleModalClose(childData) {
        if (childData === 1) {
            setProjectModal(0);
        }
    }

    function renderModal() {
        if (projectModal === 1) {
            return <BuildModal closeModal={handleModalClose} createProject={newProjectHandler} />
        }
        else {
            return null;
        }
    }


    return (
        <div className="project-manager-container">
            {renderModal()}


            <div className="cards-container">
                <button className="create-project-button" onClick={modalHandler}>Create Project +</button>

                {projectState.map((project) => <ProjectCard key={project.projectID} projectRender={props.viewHandler} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectID={project.projectID} projectDeadline={project.projectDeadline} projectTeam={project.projectTeam} />)}


            </div>
        </div>
    );
}

export default ProjectManager;