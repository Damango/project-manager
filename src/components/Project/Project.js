import React from 'react';
import "./Project.css"
import ProjectTasks from "./ProjectTasks/ProjectTasks";
import FinanceTool from "./FinanceTool/FinanceTool";

import ProjectSettings from "./ProjectSettings/ProjectSettings"
import { useState } from "react"
import TeamManager from './TeamManager/TeamManager';
import { useSpring, animated } from 'react-spring'

let data = JSON.parse(localStorage.getItem('projects'));

const Project = (props) => {
    const projectAnimate = useSpring({ opacity: 1, from: { opacity: 0 } })
    const animateBar = useSpring({ from: { left: -60 }, to: { left: 0 }, config: { duration: 100 } })
    const [projectView, setProjectView] = useState(1)


    function closeHandle() {
        props.closeHandler(0)
    }

    function changeProjectView() {
        setProjectView(1)
    }

    function changeProjectView2() {
        setProjectView(2)
    }

    function changeProjectView3() {
        setProjectView(3)
    }

    function changeProjectView4() {
        setProjectView(4);
    }

    function projectViewHandler() {
        if (projectView === 1) {
            return <ProjectTasks projectTitle={props.projectData.projectTitle} tasksData={props.projectData} viewID={changeProjectView} projectID={props.projectData.projectID} update={props.updateHandler} updateData={props.updateData} />
        }

        else if (projectView === 2) {
            return <FinanceTool projectTitle={props.projectData.projectTitle} financeData={props.projectData.financeInformation} projectID={props.projectData.projectID} update={props.updateHandler} updateData={props.updateData} />
        }

        if (projectView === 3) {
            return <TeamManager projectTitle={props.projectData.projectTitle} projectID={props.projectData.projectID} teamMembers={props.projectData.teamMembers} update={props.updateHandler} updateData={props.updateData} />
        }

        if (projectView === 4) {
            return <ProjectSettings projectTitle={props.projectData.projectTitle} projectID={props.projectData.projectID} update={props.updateHandler} updateData={props.updateData} />
        }
    }

    return (
        <animated.div style={projectAnimate} className="project-container">
            <animated.div style={animateBar} className="project-nav-bar">
                <div className="close-project" onClick={closeHandle}><i className="fas fa-angle-left"></i></div>
                <div className="project-navigate-icons">
                    <div className="todo-icon fa-icon" onClick={changeProjectView}><i className="far fa-list-alt"></i></div>
                    <div className="finance-icon fa-icon" onClick={changeProjectView2}><i className="fas fa-coins"></i></div>
                    <div className="team-icon fa-icon" onClick={changeProjectView3}><i className="fas fa-users"></i></div>
                    <div className="settings-icon fa-icon" onClick={changeProjectView4}><i className="fas fa-cog"></i></div>
                </div>
            </animated.div>
            <div className="project-views-wrapper">
                <div className="project-views-container">

                    {projectViewHandler()}
                </div>
            </div>

        </animated.div>
    );
}

export default Project;