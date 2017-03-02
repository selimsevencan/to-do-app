import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Component/Projects';
import AddProject from './Component/AddProject';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
          id: uuid.v4(),
          title: 'JavaScript',
          subtitle: 'Front-End'
        },
        {
          id: uuid.v4(),
          title: 'Python',
          subtitle: 'Back-End'
        },
        {
          id: uuid.v4(),
          title: 'Sketch',
          subtitle: 'Design'
        },
        {
          id: uuid.v4(),
          title: 'Visual Studio Code',
          subtitle: 'Text Editor'
        }
    ]})
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  render() {
  
    return (
      <div className="App">
            <Projects  projects={this.state.projects}  onDelete={this.handleDeleteProject.bind(this)}/>
            <AddProject AddProject={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
