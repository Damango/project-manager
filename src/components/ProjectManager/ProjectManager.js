import React from 'react';
import "./ProjectManager.css";
import ProjectCard from "../ProjectCard/ProjectCard"
import { useState } from 'react';
import BuildModal from "../BuildModal/BuildModal"
import { animated, useSpring } from 'react-spring'

const ProjectManager = (props) => {


    const animateManager = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200 } })
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
        <animated.div style={animateManager} className="project-manager-container">
            {renderModal()}

            <div className="cards-container">
                <button className="create-project-button" onClick={modalHandler}>Create Project +</button>

                {projectState.map((project) => <ProjectCard key={project.projectID} projectRender={props.viewHandler} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectID={project.projectID} projectDeadline={project.projectDeadline} projectTeam={project.teamMembers} />)}

            </div>
        </animated.div>
    );
}

export default ProjectManager;