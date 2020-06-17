import React from 'react';
import "./TeamManager.css";
import { useState } from "react"
import Member from "./Member/Member"
import { animated, useSpring } from 'react-spring';
const TeamManager = (props) => {

    let teamMembers = JSON.parse(localStorage.getItem('team-members'));
    const animateTeam = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200 } })



    const [teamUpdates, setTeamUpdates] = useState(0);
    const [developers, setDevelopers] = useState(props.teamMembers.developers);
    const [engineers, setEngineers] = useState(props.teamMembers.engineers);
    const [designers, setDesigners] = useState(props.teamMembers.designers);
    const [admins, setAdmins] = useState(props.teamMembers.admins);

    const [addState, setAddState] = useState({
        developer: 0,
        designer: 0,
        engineer: 0,
        admin: 0
    })

    function teamUpdate(childData) {
        let i;
        let theTeam;
        let data = JSON.parse(localStorage.getItem('projects'));
        for (i = 0; i < data.length; i++) {

            if (data[i].projectID === props.projectID && childData === 1) {
                theTeam = data[i].teamMembers.developers;
                setDevelopers(theTeam)
            }

            else if (data[i].projectID === props.projectID && childData === 2) {
                theTeam = data[i].teamMembers.designers;
                setDesigners(theTeam);
            }

            else if (data[i].projectID === props.projectID && childData === 3) {
                theTeam = data[i].teamMembers.engineers;
                setEngineers(theTeam);
            }

            else if (data[i].projectID === props.projectID && childData === 4) {
                theTeam = data[i].teamMembers.admins;
                setAdmins(theTeam);
            }
        }
        props.update(props.updateData + 1);
    }

    function addDeveloper() {
        setAddState({ developer: 1, designer: 0, engineer: 0, admin: 0 })
    }
    function addEngineer() {
        setAddState({ developer: 0, designer: 0, engineer: 1, admin: 0 })
    }

    function addDesigner() {
        setAddState({ developer: 0, designer: 1, engineer: 0, admin: 0 })
    }
    function addAdmin() {
        setAddState({ developer: 0, designer: 0, engineer: 0, admin: 1 })
    }

    function addViewDev() {
        if (addState.developer === 1) {
            let i;
            let mem = [];
            for (i = 0; i < teamMembers.length; i++) {
                if (teamMembers[i].position.toLowerCase() === "developer") {
                    mem.push(teamMembers[i]);
                }
            }
            return <div className="add-member-container">
                {mem.map((member) => <Member projectID={props.projectID} memberName={member.name} memberRole={member.title} position={member.position} active={0} memberID={member.memberID} key={member.memberID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
            </div>
        }
    }

    function addViewEngineer() {
        if (addState.engineer === 1) {
            let i;
            let mem = [];
            for (i = 0; i < teamMembers.length; i++) {
                if (teamMembers[i].position.toLowerCase() === "engineer") {
                    mem.push(teamMembers[i]);
                }
            }
            return <div className="add-member-container">
                {mem.map((member) => <Member projectID={props.projectID} memberName={member.name} memberRole={member.title} position={member.position} active={0} memberID={member.memberID} key={member.memberID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
            </div>
        }
    }


    function addViewDesigner() {
        if (addState.designer === 1) {
            let i;
            let mem = [];
            for (i = 0; i < teamMembers.length; i++) {
                if (teamMembers[i].position.toLowerCase() === "designer") {
                    mem.push(teamMembers[i]);
                }
            }
            return <div className="add-member-container">
                {mem.map((member) => <Member projectID={props.projectID} memberName={member.name} memberRole={member.title} position={member.position} active={0} memberID={member.memberID} key={member.memberID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
            </div>
        }
    }

    function addViewAdmin() {
        if (addState.admin === 1) {
            let i;
            let mem = [];
            for (i = 0; i < teamMembers.length; i++) {
                if (teamMembers[i].position.toLowerCase() === "admin") {
                    mem.push(teamMembers[i]);
                }
            }
            return <div className="add-member-container">
                {mem.map((member) => <Member projectID={props.projectID} memberName={member.name} memberRole={member.title} position={member.position} active={0} memberID={member.memberID} key={member.memberID} projectID={props.projectID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
            </div>
        }
    }

    return (
        <animated.div style={animateTeam} className="team-manager-container">
            <div className="project-title">{props.projectTitle} - Team Manager</div>
            <div className="teams-container">
                <div className="team-container developers">
                    <div className="team-title developers-t">Developers</div>
                    {developers.map((members) => <Member projectID={props.projectID} memberName={members.name} memberRole={members.title} position={members.position} key={members.memberID} memberID={members.memberID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
                    <button className="addMember add-developer" onClick={addDeveloper}>Add +</button>
                    {addViewDev()}
                </div>
                <div className="team-container engineers">
                    <div className="team-title engineers-t">Engineers</div>
                    {engineers.map((members) => <Member projectID={props.projectID} memberName={members.name} memberRole={members.title} position={members.position} key={members.memberID} memberID={members.memberID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
                    <button className="addMember add-engineer" onClick={addEngineer}>Add +</button>
                    {addViewEngineer()}
                </div>
                <div className="team-container ">
                    <div className="team-title designers-t">Designers</div>
                    {designers.map((members) => <Member projectID={props.projectID} memberName={members.name} memberRole={members.title} position={members.position} key={members.memberID} memberID={members.memberID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
                    <button className="addMember add-designer" onClick={addDesigner}>Add +</button>
                    {addViewDesigner()}
                </div>
                <div className="team-container ">
                    <div className="team-title admins-t">Administrators</div>
                    {admins.map((members) => <Member projectID={props.projectID} memberName={members.name} memberRole={members.title} position={members.position} key={members.memberID} memberID={members.memberID} teamUpdate={teamUpdate} updates={teamUpdates} />)}
                    <button className="addMember add-admin" onClick={addAdmin}>Add +</button>
                    {addViewAdmin()}
                </div>
            </div>
        </animated.div>
    );
}

export default TeamManager;