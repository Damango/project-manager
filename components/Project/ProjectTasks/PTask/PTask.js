import React from 'react';
import "./PTask.css";
import { useState } from 'react';
const PTask = (props) => {



    const [operator, setOperator] = useState(props.clearPopUp);

    function deleteTaskHandler() {
        props.deleteTask(props.taskID);

        setOperator(0);
    }


    document.querySelector('body').onclick = function testing() {

        setTimeout(function () {
            if (props.clearPopUp === 0) {

                setOperator(0);
            }
        }, 2000)

    }


    function taskOperatorHandler() {

        props.clearHandle(1);

        if (operator === 0) {
            setOperator(1);

        }
        else if (operator === 1) {
            setOperator(1)
        }


        console.log(operator);
    }

    function moveToInProgress() {
        props.moveToP(props.taskID)
        //Find Current Task and splice it from array
        //Assign spliced task and push it to inProgress

    }



    function taskOperator() {
        if (operator === 1) {
            return (<div className="task-operator">
                <div className="complete-task task-category"><i className="fas fa-check"></i>Complete</div>
                <div className="in-progress-task task-category" onClick={moveToInProgress}><i className="fas fa-play"></i>In-Progress</div>
                <div className="stuck-task task-category"><i className="fas fa-exclamation-triangle"></i>Stuck</div>
                <div className="delete-task task-category" onClick={deleteTaskHandler}><i className="far fa-trash-alt"></i>Delete</div>
            </div>)
        }

        else if (operator === 0) {

            return null;
        }
    }



    return (

        <div className="ptask-container">

            <div className="todo-item-sidebar"></div>
            <div className="todo-selector" onClick={taskOperatorHandler}></div>
            {taskOperator()}
            <div className="task-information">
                <div className="todo-title">{props.title}</div>
                <div className="todo-description">{props.description}</div>
                <div className="todo-category">{props.category}</div>
                <div className="todo-time">{props.time}</div>
            </div>
        </div>
    );
}

export default PTask;