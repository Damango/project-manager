import React from 'react';
import "./PTask.css";
import { useState } from 'react';
import ProjectTasks from "../ProjectTasks"
import { useSpring, animated } from 'react-spring'
const PTask = (props) => {


    const animateCard = useSpring({ from: { opacity: 0, top: -20 }, to: { opacity: 1, top: 0 }, config: { duration: 100 } })

    const [operator, setOperator] = useState(props.clearPopUp);
    function deleteTaskHandler() {
        props.deleteTask(props.taskID);
        setOperator(0);
    }

    document.querySelector('.App').onclick = function testing() {
        setTimeout(function () {
            setOperator(0);
        }, 100)
    }




    function taskOperatorHandler() {
        props.clearHandle(1);
        setTimeout(function () {
            if (operator === 1) {
                setOperator(0);
            }
            else {
                setOperator(1)
            }
        }, 100)
        console.log(operator);
    }

    function moveToInProgress() {
        props.moveToP(props.taskID)
        setOperator(0)
    }

    function moveToStuck() {
        props.moveToStuck(props.taskID);
        setOperator(0)
    }

    function moveToComplete() {
        props.moveToComplete(props.taskID)
        setOperator(0)
    }



    function taskOperator() {
        if (operator === 1) {
            return (<div className="task-operator">
                <div className="complete-task task-category" onClick={moveToComplete}><i className="fas fa-check"></i>Complete</div>
                <div className="in-progress-task task-category" onClick={moveToInProgress}><i className="fas fa-play"></i>In-Progress</div>
                <div className="stuck-task task-category" onClick={moveToStuck}><i className="fas fa-exclamation-triangle"></i>Stuck</div>
                <div className="delete-task task-category" onClick={deleteTaskHandler}><i className="far fa-trash-alt"></i>Delete</div>
            </div>)
        }

        else if (operator === 0) {

            return null;
        }
    }

    function taskCompleteStyle() {
        if (props.complete != null) {
            return <i className="fas fa-check-circle"></i>
        }
    }

    function taskBarStyle() {
        if (props.category.toLowerCase() === "design") {
            return 'todo-item-sidebar design'
        }
        else if (props.category.toLowerCase() === 'development') {
            return 'todo-item-sidebar developer'
        }

        else if (props.category.toLowerCase() === 'engineering') {
            return 'todo-item-sidebar engineer'
        }

        else if (props.category.toLowerCase() === 'bussiness') {
            return 'todo-item-sidebar bussiness'
        }
    }

    function taskStyle() {
        if (props.category.toLowerCase() === "design") {
            return 'todo-category design'
        }
        else if (props.category.toLowerCase() === 'development') {
            return 'todo-category developer'
        }

        else if (props.category.toLowerCase() === 'engineering') {
            return 'todo-category engineer'
        }

        else if (props.category.toLowerCase() === 'bussiness') {
            return 'todo-category bussiness'
        }
    }




    return (

        <animated.div style={animateCard} className="ptask-container">

            <div className={taskBarStyle()}></div>
            <div className="todo-selector" onClick={taskOperatorHandler}>
                <div className="selector-circle"></div>
                <div className="selector-circle"></div>
                <div className="selector-circle"></div>
            </div>
            {taskOperator()}
            <div className="task-information">
                <div className="todo-title">{props.title} </div>
                <div className="todo-description">{props.description}</div>
                {taskCompleteStyle()}
                <div className={taskStyle()}>{props.category}</div>


            </div>
        </animated.div>
    );
}

export default PTask;