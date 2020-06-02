import React from 'react';
import Layout from "./components/Layout/Layout";
import ProjectManager from "./components/ProjectManager/ProjectManager";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project/Project"
import './App.css';
import { useState } from "react"

function App() {

  let data = JSON.parse(localStorage.getItem('projects'));

  const [projectState, setProjectState] = useState(0);
  const [projectData, setProjectData] = useState(0);

  let passedData;

  function newProjectRender() {




  }


  function renderProjectView() {





    if (projectState >= 1) {
      let viewing;
      let i;
      for (i = 0; i < data.length; i++) {
        if (data[i].projectID === projectData) {
          viewing = <Project closeHandler={changeViewHandler} projectData={data[i]} />
        }
      }

      return viewing;
    }
    else {
      return null;
    }
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
        <NavBar />
        <ProjectManager viewHandler={changeViewHandler} />
        {renderProjectView()}

      </Layout>
    </div>
  );
}

export default App;
