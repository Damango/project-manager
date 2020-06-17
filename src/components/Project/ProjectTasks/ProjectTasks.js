import React from 'react';
import "./ProjectTasks.css"
import PTask from "./PTask/PTask"
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
const ProjectTasks = (props) => {


    let data = JSON.parse(localStorage.getItem('projects'));
    const animateToDo = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200 } })
    const [taskState, setTaskState] = useState(props.tasksData.project_todos);
    const [progressState, setProgressState] = useState(props.tasksData.project_inProgress);
    const [stuckState, setStuckState] = useState(props.tasksData.project_stuck);
    const [completeState, setCompleteState] = useState(props.tasksData.project_complete);
    const [newTask, setNewTask] = useState(0);
    const [clearState, setClearState] = useState(0);
    const [buttonStyle, setButtonStyle] = useState("create-task-button-off");
    const [emptySubmit, setEmptySubmit] = useState(0);
    const [emptyStyle, setEmptyStyle] = useState("task-title-creation");




    function clearPopUps() {

        setClearState(0);
        console.log(clearState)
        return 0;
    }


    function errorStyle() {

        if (emptySubmit === 0) {
            return <span></span>
        }

        else {
            return <i class="fas fa-exclamation-circle"></i>
        }
    }



    function submitError() {
        if (emptySubmit === 0) {

            return "Task Title"
        }
        else {

            return "Please Enter A Title"
        }
    }

    function plusState() {
        if (buttonStyle === "create-task-button-on") {
            return <span>-</span>
        }
        else {
            return <span>+</span>
        }
    }

    function addTaskDrop() {


        if (newTask === 1) {
            setNewTask(0)
            setButtonStyle("create-task-button-off");
            setEmptyStyle("task-title-creation")
            setEmptySubmit(0)
        }
        else {
            setNewTask(1);
            setButtonStyle("create-task-button-on")
        }
    }


    function changeInputStyle() {
        setEmptySubmit(0);
        setEmptyStyle("task-title-creation")
    }

    function renderTaskCreation() {
        if (newTask === 1) {



            return (<div className="task-creation">
                <input className={emptyStyle} placeholder={submitError()} onClick={changeInputStyle} />{errorStyle()}
                <input className="task-description-creation" placeholder="Task Description" />
                <select className="task-category-selection">
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Bussiness">Bussiness</option>
                </select>

                <button className="add-task-button" onClick={addTask}>Add Task</button>
            </div>)
        }
        else if (newTask === 0) {
            return null
        }
    }

    function addTask() {
        let taskTitle = document.querySelector('.task-title-creation').value;
        let taskDescription = document.querySelector('.task-description-creation').value;
        let taskCategory = document.querySelector('.task-category-selection').value;
        let newTask = {
            category: taskCategory,
            todo_description: taskDescription,
            todo_title: taskTitle,
            taskID: Math.floor(Math.random() * 20000)
        }
        if (taskTitle === "" || taskTitle === null || taskDescription === null || taskDescription === "") {
            setEmptySubmit(1);
            setEmptyStyle("task-title-creation-error task-title-creation")
        }
        else {
            let i;
            for (i = 0; i < data.length; i++) {
                if (data[i].projectID === props.tasksData.projectID) {
                    data[i].project_todos.push(newTask);
                    localStorage.setItem('projects', JSON.stringify(data));
                    setTaskState(data[i].project_todos)
                }
            }
            setNewTask(0)
            setButtonStyle("create-task-button-off");

        }

        props.update(props.updateData + 1)

    }

    function deleteTask(taskID) {
        let dataSet = JSON.parse(localStorage.getItem('projects'))
        let i, j;
        for (i = 0; i < data.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {

                for (j = 0; j < dataSet[i].project_todos.length; j++) {

                    if (dataSet[i].project_todos[j].taskID === taskID) {
                        dataSet[i].project_todos.splice(j, 1);
                        console.log(dataSet[i].project_todos)
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setTaskState(dataSet[i].project_todos)
                    }
                }
            }
        }
        props.update(props.updateData + 1)
    }

    function deleteTaskP(taskID) {
        let dataSet = JSON.parse(localStorage.getItem('projects'))
        let i, j;
        for (i = 0; i < data.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {
                for (j = 0; j < dataSet[i].project_inProgress.length; j++) {
                    if (dataSet[i].project_inProgress[j].taskID === taskID) {
                        dataSet[i].project_inProgress.splice(j, 1);
                        console.log(dataSet[i].project_inProgress)
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setProgressState(dataSet[i].project_inProgress)
                    }
                }
            }
        }
        props.update(props.updateData + 1)
    }

    function deleteTaskS(taskID) {
        let dataSet = JSON.parse(localStorage.getItem('projects'))
        let i, j;
        for (i = 0; i < data.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {
                for (j = 0; j < dataSet[i].project_stuck.length; j++) {
                    if (dataSet[i].project_stuck[j].taskID === taskID) {
                        dataSet[i].project_stuck.splice(j, 1);
                        console.log(dataSet[i].project_stuck)
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setStuckState(dataSet[i].project_stuck)
                    }
                }
            }
        }
        props.update(props.updateData + 1)
    }

    function deleteTaskC(taskID) {
        let dataSet = JSON.parse(localStorage.getItem('projects'))
        let i, j;
        for (i = 0; i < data.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {
                for (j = 0; j < dataSet[i].project_complete.length; j++) {
                    if (dataSet[i].project_complete[j].taskID === taskID) {
                        dataSet[i].project_complete.splice(j, 1);
                        console.log(dataSet[i].project_complete)
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setCompleteState(dataSet[i].project_complete)
                    }
                }
            }
        }
        props.update(props.updateData + 1)
    }

    function moveToP(childData) {
        //Find Current Task and splice it from array
        let dataSet = JSON.parse(localStorage.getItem('projects'))
        let theNew;
        let theFinal;
        let i, j;
        for (i = 0; i < dataSet.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {
                for (j = 0; j < dataSet[i].project_todos.length; j++) {
                    if (dataSet[i].project_todos[j].taskID === childData) {
                        theNew = dataSet[i].project_todos.splice(j, 1);
                        theFinal = {
                            inProgress_title: theNew[0].todo_title,
                            taskID: theNew[0].taskID,
                            inProgress_description: theNew[0].todo_description,
                            category: theNew[0].category,
                            time: theNew[0].time
                        }
                        dataSet[i].project_inProgress.push(theFinal);
                        localStorage.setItem('projects', JSON.stringify(dataSet))
                        setProgressState(dataSet[i].project_inProgress)
                        setTaskState(dataSet[i].project_todos)
                        console.log(theNew[0].todo_title)
                    }
                }
            }
        }

        for (i = 0; i < dataSet.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {
                for (j = 0; j < dataSet[i].project_stuck.length; j++) {
                    if (dataSet[i].project_stuck[j].taskID === childData) {
                        theNew = dataSet[i].project_stuck.splice(j, 1);
                        theFinal = {
                            inProgress_title: theNew[0].stuck_title,
                            taskID: theNew[0].taskID,
                            inProgress_description: theNew[0].stuck_description,
                            category: theNew[0].category,
                            time: theNew[0].time

                        }
                        dataSet[i].project_inProgress.push(theFinal);
                        localStorage.setItem('projects', JSON.stringify(dataSet))
                        setProgressState(dataSet[i].project_inProgress)
                        setStuckState(dataSet[i].project_stuck)
                    }
                }
            }
        }
        props.update(props.updateData + 1)
    }

    function moveToStuck(childData) {
        //Find Current Task and splice it from array
        let dataSet = JSON.parse(localStorage.getItem('projects'))
        let theNew;
        let theFinal;
        let i, j;
        for (i = 0; i < dataSet.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {
                for (j = 0; j < dataSet[i].project_todos.length; j++) {
                    if (dataSet[i].project_todos[j].taskID === childData) {
                        theNew = dataSet[i].project_todos.splice(j, 1);
                        theFinal = {
                            stuck_title: theNew[0].todo_title,
                            taskID: theNew[0].taskID,
                            stuck_description: theNew[0].todo_description,
                            category: theNew[0].category,
                            time: theNew[0].time
                        }
                        dataSet[i].project_stuck.push(theFinal);
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setStuckState(dataSet[i].project_stuck);
                        setProgressState(dataSet[i].project_inProgress);
                        setTaskState(dataSet[i].project_todos);
                    }
                }
                for (j = 0; j < dataSet[i].project_inProgress.length; j++) {
                    if (dataSet[i].project_inProgress[j].taskID === childData) {
                        theNew = dataSet[i].project_inProgress.splice(j, 1);
                        theFinal = {
                            stuck_title: theNew[0].inProgress_title,
                            taskID: theNew[0].taskID,
                            stuck_description: theNew[0].inProgress_description,
                            category: theNew[0].category,
                            time: theNew[0].time
                        }
                        dataSet[i].project_stuck.push(theFinal);
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setStuckState(dataSet[i].project_stuck);
                        setProgressState(dataSet[i].project_inProgress);
                        setTaskState(dataSet[i].project_todos);
                    }
                }
            }
        }
        props.update(props.updateData + 1)
    }

    function moveToComplete(childData) {
        let dataSet = JSON.parse(localStorage.getItem('projects'))
        let theNew;
        let theFinal;
        let i, j;
        for (i = 0; i < dataSet.length; i++) {
            if (dataSet[i].projectID === props.tasksData.projectID) {
                for (j = 0; j < dataSet[i].project_todos.length; j++) {
                    if (dataSet[i].project_todos[j].taskID === childData) {
                        theNew = dataSet[i].project_todos.splice(j, 1);
                        theFinal = {
                            complete_title: theNew[0].todo_title,
                            taskID: theNew[0].taskID,
                            complete_description: theNew[0].todo_description,
                            category: theNew[0].category,
                            time: theNew[0].time
                        }
                        dataSet[i].project_complete.push(theFinal);
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setStuckState(dataSet[i].project_stuck);
                        setProgressState(dataSet[i].project_inProgress);
                        setTaskState(dataSet[i].project_todos);
                        setCompleteState(dataSet[i].project_complete);
                    }
                }
                for (j = 0; j < dataSet[i].project_inProgress.length; j++) {
                    if (dataSet[i].project_inProgress[j].taskID === childData) {
                        theNew = dataSet[i].project_inProgress.splice(j, 1);
                        theFinal = {
                            complete_title: theNew[0].inProgress_title,
                            taskID: theNew[0].taskID,
                            complete_description: theNew[0].inProgress_description,
                            category: theNew[0].category,
                            time: theNew[0].time
                        }
                        dataSet[i].project_complete.push(theFinal);
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setStuckState(dataSet[i].project_stuck);
                        setProgressState(dataSet[i].project_inProgress);
                        setTaskState(dataSet[i].project_todos);
                        setCompleteState(dataSet[i].project_complete);
                    }
                }
                for (j = 0; j < dataSet[i].project_stuck.length; j++) {

                    if (dataSet[i].project_stuck[j].taskID === childData) {
                        theNew = dataSet[i].project_stuck.splice(j, 1);
                        theFinal = {
                            complete_title: theNew[0].stuck_title,
                            taskID: theNew[0].taskID,
                            complete_description: theNew[0].stuck_description,
                            category: theNew[0].category,
                            time: theNew[0].time
                        }
                        dataSet[i].project_complete.push(theFinal);
                        localStorage.setItem('projects', JSON.stringify(dataSet));
                        setStuckState(dataSet[i].project_stuck);
                        setProgressState(dataSet[i].project_inProgress);
                        setTaskState(dataSet[i].project_todos);
                        setCompleteState(dataSet[i].project_complete);
                    }

                }
            }
        }
        props.update(props.updateData + 1)
    }

    function clearHandle(childData) {
        if (childData === 1) {

            setClearState(1)
        }
        else {
            setClearState(0)
        }
    }

    return (
        <animated.div style={animateToDo} className="project-tasks-container" onClick={clearPopUps}>
            <div className="project-title">{props.projectTitle} - To Do List</div>
            <div className="main-task-wrapper">
                <div className="project-task-container  todo-list">
                    <p>To Do </p>
                    {taskState.map((task) => <PTask title={task.todo_title} description={task.todo_description} category={task.category} time={task.time} taskID={task.taskID} key={task.taskID} deleteTask={deleteTask} clearPopUp={clearState} clearHandle={clearHandle} moveToP={moveToP} moveToStuck={moveToStuck} moveToComplete={moveToComplete} />)}
                    <button className={buttonStyle} onClick={addTaskDrop}>Create Task {plusState()}</button>
                    {renderTaskCreation()}
                </div>
                <div className="project-task-container  in-progress-list">
                    <p>In-Progress</p>
                    {progressState.map((task) => <PTask title={task.inProgress_title} description={task.inProgress_description} category={task.category} time={task.time} taskID={task.taskID} key={task.taskID} clearPopUp={clearState} deleteTask={deleteTaskP} clearHandle={clearHandle} moveToStuck={moveToStuck} moveToComplete={moveToComplete} />)}
                </div>
                <div className="project-task-container  stuck-list">
                    <p>Stuck / Incomplete</p>
                    {stuckState.map((task) => <PTask title={task.stuck_title} description={task.stuck_description} category={task.category} time={task.time} taskID={task.taskID} key={task.taskID} clearPopUp={clearState} deleteTask={deleteTaskS} clearHandle={clearHandle} moveToStuck={moveToStuck} moveToP={moveToP} moveToComplete={moveToComplete} />)}
                </div>
                <div className="project-task-container  completed-list">
                    <p>Completed</p>
                    {completeState.map((task) => <PTask title={task.complete_title} description={task.complete_description} category={task.category} time={task.time} taskID={task.taskID} key={task.taskID} clearPopUp={clearState} deleteTask={deleteTaskC} clearHandle={clearHandle} moveToStuck={moveToStuck} moveToP={moveToP} moveToComplete={moveToComplete} complete={1} />)}
                </div>
            </div>

        </animated.div>
    );
}

export default ProjectTasks;