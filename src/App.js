import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Component/Projects';
import AddProject from './Component/AddProject';
import './App.css';

const data = [
  {
    id: uuid.v4(),
    title: 'JavaScript',
    subtitle: 'Front-End',
    isChecked: true,
  },
  {
    id: uuid.v4(),
    title: 'Python',
    subtitle: 'Back-End',
    isChecked: false,
  },
  {
    id: uuid.v4(),
    title: 'Sketch',
    subtitle: 'Design',
    isChecked: true,
  },
  {
    id: uuid.v4(),
    title: 'Visual Studio Code',
    subtitle: 'Text Editor',
    isChecked: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: data,
    };
    this.handleAddProject = this.handleAddProject.bind(this);
    this.handleCheckProject = this.handleCheckProject.bind(this);
    this.handleDeleteProject = this.handleDeleteProject.bind(this);
  }

  handleAddProject(project) {
    const projects = this.state.projects;
    projects.push(project);
    this.setState({ projects });
  }

  handleCheckProject(id) {
    const projects = this.state.projects;

    const newProjects = projects.map((_x) => {
      const x = _x;
      if (x.id === id) {
        x.isChecked = !x.isChecked;
      }
      return x;
    });

    this.setState({
      projects: newProjects,
    });
  }

  handleDeleteProject(id) {
    const projects = this.state.projects;
    const index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects });
  }

  render() {
    return (
      <div className="App">
        <Projects
          projects={this.state.projects}
          onChange={this.handleCheckProject}
          onDelete={this.handleDeleteProject}
        />
        <AddProject AddProject={this.handleAddProject} />
      </div>
    );
  }
}

export default App;
