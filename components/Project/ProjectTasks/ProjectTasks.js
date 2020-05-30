import React from 'react';
import "./ProjectTasks.css"
import PTask from "./PTask/PTask"
const ProjectTasks = (props) => {
    return (
        <div className="project-tasks-container">
            <div className="project-title">{props.projectTitle}</div>
            <div className="main-task-wrapper">
                <div className="project-task-container  todo-list">
                    <p>To Do <span><i className="fas fa-plus-circle add-todo"></i></span></p>
                    <PTask />
                    <PTask />
                    <PTask />
                </div>
                <div className="project-task-container  in-progress-list">
                    <p>In-Progress</p>
                    <PTask />
                    <PTask />
                    <PTask />
                    <PTask />
                </div>
                <div className="project-task-container  stuck-list">
                    <p>Stuck / Incomplete</p>
                    <PTask />
                </div>
                <div className="project-task-container  completed-list">
                    <p>Completed</p>
                    <PTask />
                    <PTask />
                    <PTask />
                    <PTask />
                    <PTask />
                </div>
            </div>

        </div>
    );
}

export default ProjectTasks;