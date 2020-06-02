import React from 'react';
import "./BuildModal.css"

const BuildModal = (props) => {


    function closeModal() {
        { props.closeModal(1) }
    }


    function createProject() {


        let title = document.querySelector('.project-title-input').value;
        let description = document.querySelector('.project-description-input').value;
        let deadline = document.querySelector('.deadline').value;

        let newData;
        let data = JSON.parse(localStorage.getItem('projects'));
        data.push({
            projectTitle: title,
            projectDeadline: deadline,
            projectTeam: ["Justin Kessler"],
            projectDescription: description,
            projectTaskProgress: 70,
            projectID: Math.floor(Math.random() * 100000),
            project_todos: [
            ],
            project_inProgress: [
            ],
            project_stuck: [
            ],
            project_complete: [

            ]


        })
        newData = data;

        localStorage.setItem('projects', JSON.stringify(newData));
        props.createProject();
    }



    return (
        <div className="build-modal-container">
            <div className="modal-closer" onClick={closeModal}>X</div>
            <div className="modal-inputs-container">
                <div className="modal-top-divide">
                    <div className="form-project-title">
                        <input className="project-title-input" />
                        <span>Project Name:</span>
                    </div>
                    <div className="form-project-title">
                        <input className="project-title-input deadline" />
                        <span>Project Deadline:</span>
                    </div>
                </div>
                <div className="form-project-description">
                    <textarea className="project-description-input" />
                    <span>Project Description:</span>
                </div>
                <div className="modal-bottom-divide">
                    <div className="team-container"></div>
                    <div className="color-selector"></div>
                </div>


            </div>
            <button className="create-button" onClick={createProject}>Create</button>

        </div>
    );
}

export default BuildModal;