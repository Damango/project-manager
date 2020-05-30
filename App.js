import React from 'react';
import Layout from "./components/Layout/Layout";
import ProjectManager from "./components/ProjectManager/ProjectManager";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project/Project"
import './App.css';
import { useState } from "react"

function App() {

  let data = JSON.parse(localStorage.getItem('projects'));

  const [projectView, setProjectView] = useState(0);


  function renderProjectView() {





    if (projectView >= 1) {




      return <Project closeHandler={changeViewHandler} projectID={projectView} projectData={data[projectView - 1]} />
    }
    else {
      return null;
    }
  }

  function changeViewHandler(choice) {

    if (choice >= 1) {
      setProjectView(choice)
    }
    else if (choice === 0) {

      setProjectView(0);

    }

    console.log(choice);



  }

  function otherChange() {
    setProjectView(1)
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
