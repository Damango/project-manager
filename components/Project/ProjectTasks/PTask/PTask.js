import React from 'react';
import "./PTask.css";
const PTask = () => {
    return (
        <div className="ptask-container">
            <div className="todo-item-sidebar"></div>
            <div className="todo-selector"></div>
            <div className="task-information">
                <div className="todo-title">Create API for Black Box</div>
                <div className="todo-description">Finish the final touches on the API in the black box division</div>
                <div className="todo-category">Develpoment</div>
                <div className="todo-time">29m</div>
            </div>
        </div>
    );
}

export default PTask;