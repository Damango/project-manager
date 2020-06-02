import React from 'react';
import "./ProjectTasks.css"
import PTask from "./PTask/PTask"
import { useState } from 'react'
const ProjectTasks = (props) => {

    const [taskState, setTaskState] = useState(props.tasksData.project_todos);
    const [taskState2, setTaskState2] = useState(props.tasksData.project_inProgress);
    const [newTask, setNewTask] = useState(0);
    const [clearState, setClearState] = useState(0);
    let data = JSON.parse(localStorage.getItem('projects'));




    function clearPopUps() {


        setClearState(0);
        console.log(clearState)

        return 0;
    }


    function addTaskDrop() {
        console.log(taskState);

        if (newTask === 1) {
            setNewTask(0)
        }

        else {
            setNewTask(1);
        }

    }


    function renderTaskCreation() {
        if (newTask === 1) {
            return (<div className="task-creation">
                <input className="task-title-creation" placeholder="Task Title" />
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
            time: "4h 20m",
            todo_description: taskDescription,
            todo_title: taskTitle,
            taskID: Math.floor(Math.random() * 20000)
        }
        let i;
        for (i = 0; i < data.length; i++) {
            if (data[i].projectID === props.tasksData.projectID) {
                data[i].project_todos.push(newTask);
                localStorage.setItem('projects', JSON.stringify(data));
                setTaskState(data[i].project_todos)
            }
        }
        setNewTask(0)
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
                        setTaskState2(dataSet[i].project_inProgress)
                    }
                }

            }
        }
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
                        setTaskState2(dataSet[i].project_inProgress)
                        setTaskState(dataSet[i].project_todos)

                        console.log(theNew[0].todo_title)
                    }
                }



            }
        }


        //Assign spliced task and push it to inProgress
        //Save Local Storage
        //Set new state





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
        <div className="project-tasks-container" onClick={clearPopUps}>
            <div className="project-title">{props.projectTitle}</div>
            <div className="main-task-wrapper">
                <div className="project-task-container  todo-list">
                    <p>To Do </p>

                    {taskState.map((task) => <PTask title={task.todo_title} description={task.todo_description} category={task.category} time={task.time} taskID={task.taskID} deleteTask={deleteTask} clearPopUp={clearState} clearHandle={clearHandle} moveToP={moveToP} />)}
                    <button className="create-task-button" onClick={addTaskDrop}>Add Task +</button>
                    {renderTaskCreation()}

                </div>
                <div className="project-task-container  in-progress-list">
                    <p>In-Progress</p>
                    {taskState2.map((task) => <PTask title={task.inProgress_title} description={task.inProgress_description} category={task.category} time={task.time} taskID={task.taskID} clearPopUp={clearState} deleteTask={deleteTaskP} clearHandle={clearHandle} />)}
                </div>
                <div className="project-task-container  stuck-list">
                    <p>Stuck / Incomplete</p>
                    {props.tasksData.project_stuck.map((task) => <PTask title={task.stuck_title} description={task.stuck_description} category={task.category} time={task.time} />)}
                </div>
                <div className="project-task-container  completed-list">
                    <p>Completed</p>
                    {props.tasksData.project_complete.map((task) => <PTask title={task.complete_title} description={task.complete_description} category={task.category} time={task.time} />)}
                </div>
            </div>

        </div>
    );
}

export default ProjectTasks;