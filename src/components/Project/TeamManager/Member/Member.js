import React from 'react';
import "./Member.css"
import { animated, useSpring } from 'react-spring'
const Member = (props) => {

    let data = JSON.parse(localStorage.getItem('projects'));
    let inactiveMembers = JSON.parse(localStorage.getItem('team-members'));
    let activeMembers = data.teamMembers;
    const animateMember = useSpring({ from: { opacity: 0, left: -20 }, to: { opacity: 1, left: 0 }, config: { duration: 200 } })
    function addTeamMember() {

        let i, j;
        let newData;

        for (i = 0; i < inactiveMembers.length; i++) {
            if (inactiveMembers[i].memberID === props.memberID) {

                newData = inactiveMembers[i];
                inactiveMembers.splice(i, 1);
                for (j = 0; j < data.length; j++) {
                    if (data[j].projectID === props.projectID && props.position.toLowerCase() === "developer") {
                        data[j].teamMembers.developers.push(newData);
                        localStorage.setItem('projects', JSON.stringify(data));
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));
                        props.teamUpdate(1)
                    }

                    else if (data[j].projectID === props.projectID && props.position.toLowerCase() === "engineer") {
                        data[j].teamMembers.engineers.push(newData);
                        localStorage.setItem('projects', JSON.stringify(data));
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));
                        props.teamUpdate(3)
                    }

                    else if (data[j].projectID === props.projectID && props.position.toLowerCase() === "designer") {
                        data[j].teamMembers.designers.push(newData);
                        localStorage.setItem('projects', JSON.stringify(data));
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));
                        props.teamUpdate(2)
                    }

                    else if (data[j].projectID === props.projectID && props.position.toLowerCase() === "admin") {
                        data[j].teamMembers.admins.push(newData);
                        localStorage.setItem('projects', JSON.stringify(data));
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));
                        props.teamUpdate(4)
                    }
                }
            }
        }
    }

    function removeMember() {
        let theData = JSON.parse(localStorage.getItem('projects'));
        let i, j;

        for (i = 0; i < data.length; i++) {

            if (props.position.toLowerCase() === "developer") {
                for (j = 0; i < theData[i].teamMembers.developers.length; j++) {
                    if (theData[i].teamMembers.developers[j].memberID === props.memberID) {
                        console.log(data[i].teamMembers.developers[j].memberID)
                        console.log(props.memberID)
                        let removed = theData[i].teamMembers.developers.splice(j, 1);
                        localStorage.setItem('projects', JSON.stringify(theData));
                        setTimeout(function () {
                            props.teamUpdate(1)
                        }, 100);
                        inactiveMembers.push(removed[0])
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));

                        break;
                    }
                }
            }
            else if (props.position.toLowerCase() === "designer") {
                for (j = 0; i < theData[i].teamMembers.designers.length; j++) {
                    if (theData[i].teamMembers.designers[j].memberID === props.memberID) {

                        console.log(theData[i].teamMembers.designers[j].memberID)
                        console.log(props.memberID)
                        let removed = data[i].teamMembers.designers.splice(j, 1);
                        localStorage.setItem('projects', JSON.stringify(data));
                        setTimeout(function () {
                            props.teamUpdate(2)
                        }, 100);
                        inactiveMembers.push(removed[0])
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));
                        break;
                    }
                }
            }

            else if (props.position.toLowerCase() === "engineer") {
                for (j = 0; i < data[i].teamMembers.engineers.length; j++) {
                    if (data[i].teamMembers.engineers[j].memberID === props.memberID) {
                        let removed = data[i].teamMembers.engineers.splice(j, 1);
                        localStorage.setItem('projects', JSON.stringify(data));
                        setTimeout(function () {
                            props.teamUpdate(3)
                        }, 100);
                        inactiveMembers.push(removed[0])
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));
                        break;
                    }
                }
            }

            else if (props.position.toLowerCase() === 'admin') {

                for (j = 0; i < data[i].teamMembers.admins.length; j++) {
                    if (data[i].teamMembers.admins[j].memberID === props.memberID) {
                        let removed = data[i].teamMembers.admins.splice(j, 1);
                        localStorage.setItem('projects', JSON.stringify(data));
                        setTimeout(function () {
                            props.teamUpdate(4)
                        }, 100);
                        inactiveMembers.push(removed[0])
                        localStorage.setItem('team-members', JSON.stringify(inactiveMembers));
                        break;
                    }
                }
            }
        }
    }
    function activeStyle() {
        if (props.active === 0) {
            return <div className="add-member-icon" onClick={addTeamMember}><i className="fas fa-plus-square"></i></div>
        }
    }

    function deleteStyle() {
        if (props.active != 0) {
            return <div className="delete-member-style" onClick={removeMember}><i className="fas fa-user-minus"></i></div>
        }
    }


    return (<animated.div style={animateMember} className="member-container">
        <div className="member-icon"></div>
        <div className="member-name">{props.memberName}</div>
        <div className="member-role"> {props.memberRole}</div>
        {deleteStyle()}
        {activeStyle()}
    </animated.div>);
}

export default Member;