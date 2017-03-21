import React, { PropTypes, Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    let projectsLength;
    let clickedProjectsLength;
    if (this.props.projects) {
      projectsLength = this.props.projects.length;
      clickedProjectsLength = this.props.projects.filter(p => p.isChecked === true).length;
      projectItems = this.props.projects.map(project => (
        <ProjectItem
          project={project}
          key={project.id}
          onDelete={this.props.onDelete}
          onChange={this.props.onChange}
        />
      ));
    }

    return (
      <div className="projects card">
        <h3>Projects</h3>
        {projectItems}
        <span> There are {projectsLength} programing languages  </span>
        <span>Clicked projects {clickedProjectsLength}</span>
      </div>
    );
  }
}

Projects.defaultProps = {
  onDelete: () => {},
  onChange: () => {},
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
};

export default Projects;
