import React, { Component } from 'react';


class ProjectItem extends Component {
  deleteProject(id) {
      this.props.onDelete(id);
  }
  render() {
    const style = {
        marginLeft: 15,
        listStyle: 'none',
    }
    
    return (
      <div className="projectList">
        <li style={style}>
            <strong>{this.props.project.title}-</strong>
            <span>{this.props.project.subtitle}</span>
            <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
        </li>
        <br />
      </div>
    );
  }
}

export default ProjectItem;
