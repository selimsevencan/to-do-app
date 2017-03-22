import React, { PropTypes, Component } from 'react';


class ProjectItem extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  handleChange() {
    this.props.onChange(this.props.project.id);
  }

  deleteProject() {
    this.props.onDelete(this.props.project.id);
  }

  render() {
    const style = {
      marginLeft: 15,
      listStyle: 'none',
    };
    const { project } = this.props;

    return (
      <div className="projectList">
        <li style={style}>
          <input type="checkbox" checked={project.isChecked} onChange={this.handleChange} />
          <strong>{project.title}-</strong>
          <span>{project.subtitle}</span>
          <button onClick={this.deleteProject}>Delete</button>
        </li>
        <br />
      </div>
    );
  }
}

ProjectItem.defaultProps = {
  onChange: () => {},
  onDelete: () => {},
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
