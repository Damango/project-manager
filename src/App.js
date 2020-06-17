import React from 'react';
import Layout from "./components/Layout/Layout";
import ProjectManager from "./components/ProjectManager/ProjectManager";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project/Project"
import './App.css';
import { useSpring, animated } from 'react-spring'
import { useState } from "react"



function App() {

  if (localStorage.getItem('projects') === null) {
    localStorage.setItem('projects', JSON.stringify([
      {
        projectTitle: "Black Box",
        projectDeadline: 87,
        projectTeam: ["Justin Kessler", "Jimmy Kessler", "Raymond Harmer", "Trevor Allison", "Kelsey Jones"],
        projectDescription: "Project Black Box is dedicated towards testing new Nano materials to go inside our cutting edge prosthetics.",
        projectTaskProgress: 70,
        projectID: 1,
        project_todos: [
          {
            todo_title: "Take out the Trash",
            todo_description: "Really understandable",
            category: "Life",
            time: "4h 56m",
            taskID: 1

          },
          {
            todo_title: "Build API",
            todo_description: "create a useful api for everyone to be good at",
            category: "Development",
            taskID: 2
          }
        ],
        project_inProgress: [
          {
            inProgress_title: "Build super moon",
            inProgress_description: "Really hard to do but im sure you can get it done",
            category: "Design",
            time: "1h 2m",
            taskID: 3
          }
        ],
        project_stuck: [
          {
            stuck_title: "Just really here being stuck",
            stuck_description: "Can't really see it getting much worse than this",
            category: "Development",
            time: "22m",
            taskID: 4
          }
        ],
        project_complete: [
          {
            complete_title: "Smoking that phat gas",
            complete_description: "I always knew I could do it",
            category: "Engineering",
            time: "59m",
            taskID: 5
          }
        ],
        financeInformation: {
          totalBalance: 0.00,
          income: 0.00,
          expenses: 0.00,
          transactionHistory: [{
            title: "Deposit",
            amount: 12.33,
            income: true
          }],
          repeatedPayments: [{
            title: "Hulu+",
            amount: 12.99,
            paymentDate: 26,
            income: false
          }, {
            title: "Monday.com",
            amount: 44.99,
            paymentDate: 12,
            income: false
          },
          {
            title: "Microsoft Azure",
            amount: 450.00,
            paymentDate: 8,
            income: false
          },
          {
            title: "Amazon Prime",
            amount: 6.99,
            paymentDate: 19,
            income: false
          },
          {
            title: "Boeing",
            amount: 1299,
            paymentDate: 15,
            income: true
          },
          {
            title: "SpaceX",
            amount: 2567.65,
            paymentDate: 15,
            income: true
          }, {
            title: "US Militray Air Force",
            amount: 12459.55,
            paymentDate: 5,
            income: true
          },
          {
            title: "Microsoft",
            amount: 1078.00,
            paymentDate: 10,
            income: true
          }
          ]

        },
        teamMembers: {
          developers: [
            {
              name: "Justin Kessler",
              age: 21,
              title: " - Sr. Full Stack Developer",
              memberID: Math.floor(Math.random() * 50000),
              position: "Developer"
            },
            {
              name: "Austin Bruce",
              age: 21,
              title: " - Firmware Developer",
              memberID: Math.floor(Math.random() * 50000),
              position: "Developer"
            }
          ],
          engineers: [
            {
              name: "Jimmy Kessler",
              age: 21,
              title: "Electrical Engineer",
              memberID: Math.floor(Math.random() * 50000),
              position: "Engineer"
            },
            {
              name: "Kelsey Jones",
              age: 210,
              title: "Chemical Engineer",
              memberID: Math.floor(Math.random() * 50000),
              position: "Engineer"
            }
          ],
          designers: [{
            name: "Thomas Wardell",
            age: 21,
            title: "Armando Rios",
            memberID: Math.floor(Math.random() * 50000),
            position: "Designer"
          },
          {
            name: "Kelsey Jones",
            age: 210,
            title: "Chemical Engineer",
            memberID: Math.floor(Math.random() * 50000),
            position: "Designer"
          }],
          admins: [{
            name: "Armando Rios",
            age: 21,
            title: "Film Lead",
            memberID: Math.floor(Math.random() * 50000),
            position: "Admin"
          },
          {
            name: "Justin Kessler",
            age: 21,
            title: "CEO - Porter",
            memberID: Math.floor(Math.random() * 50000),
            position: "Admin"
          }]
        }


      }
    ]))

    localStorage.setItem('team-members', JSON.stringify([
      {
        name: "Elon Musk",
        age: 48,
        title: "Space Engineer",
        position: "Engineer",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Matthew Hannigan",
        age: 22,
        title: "Mechanical Engineer",
        position: "Engineer",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Tommy Outston",
        age: 48,
        title: "Simulation Developer",
        position: "Developer",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Alex Jones",
        age: 48,
        title: "3D Artist",
        position: "Designer",
        memberID: Math.floor(Math.random() * 50000)
      },

      {
        name: "James Bond",
        age: 200,
        title: "CIA Developer",
        position: "Developer",
        memberID: Math.floor(Math.random() * 50000)
      }
      , {
        name: "John Marsh",
        age: 56,
        title: "Bussiness Admin",
        position: "Admin",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Tom Holland",
        age: 19,
        title: "Graphic Designer",
        position: "Designer",
        memberID: Math.floor(Math.random() * 50000)
      }
    ]))
  }

  else if (localStorage.getItem('team-members') === null) {
    localStorage.setItem('team-members', JSON.stringify([
      {
        name: "Elon Musk",
        age: 48,
        title: "Space Engineer",
        position: "Engineer",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Matthew Hannigan",
        age: 22,
        title: "Mechanical Engineer",
        position: "Engineer",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Tommy Outston",
        age: 48,
        title: "Simulation Developer",
        position: "Developer",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Alex Jones",
        age: 48,
        title: "3D Artist",
        position: "Designer",
        memberID: Math.floor(Math.random() * 50000)
      },

      {
        name: "James Bond",
        age: 200,
        title: "CIA Developer",
        position: "Developer",
        memberID: Math.floor(Math.random() * 50000)
      }
      , {
        name: "John Marsh",
        age: 56,
        title: "Bussiness Admin",
        position: "Admin",
        memberID: Math.floor(Math.random() * 50000)
      },
      {
        name: "Tom Holland",
        age: 19,
        title: "Graphic Designer",
        position: "Designer",
        memberID: Math.floor(Math.random() * 50000)
      }
    ]))
  }



  let data = JSON.parse(localStorage.getItem('projects'));

  const [projectState, setProjectState] = useState(0);
  const [projectData, setProjectData] = useState(0);
  const [deleteState, setDeleteState] = useState(0);

  function renderProjectView() {

    if (projectState >= 1) {
      let viewing;
      let i;
      for (i = 0; i < data.length; i++) {
        if (data[i].projectID === projectData) {
          viewing = <Project closeHandler={changeViewHandler} projectData={data[i]} updateHandler={updateHandler} updateData={projectState} />
        }
      }

      return viewing;
    }
    else {
      return null;
    }
  }




  function updateHandler(data) {
    setProjectState(data)

  }

  function changeViewHandler(choice) {

    if (choice >= 1) {
      setProjectState(choice);
      setProjectData(choice);
    }
    else if (choice === 0) {

      setProjectState(0);
      setProjectData(0)

    }

  }

  return (
    <div className="App">
      <Layout>
        <ProjectManager viewHandler={changeViewHandler} update={updateHandler} delete={deleteState} />
        {renderProjectView()}

      </Layout>
    </div>
  );
}

export default App;
