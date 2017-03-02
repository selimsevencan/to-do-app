import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state= {
            newProject :{},
        }
    }
    static defaultProps = {
        subtitles: [
            'Front-End', 'Back-End', 'Design', 'Text Editor'
        ]
    }
    handleSubmit(e){
        if(this.state.value === '') {
            alert('Title is required!!')
        } else {
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                subtitle:this.refs.subtitle.value
            }}, function() {
                this.props.AddProject(this.state.newProject);
            }
            );
        }

        e.preventDefault();
    }
  render() {
    let subtitleOptions = this.props.subtitles.map(subtitle => {
        return <option key={subtitle} value={subtitle}>{subtitle}</option>
    })
    return (
      <div className="addProject card">
       <h3>Add Project</h3>
       <form onSubmit={this.handleSubmit.bind(this)}>
        <h3>Title</h3>
        <input type='text' ref='title'/>

        <h3>Subtitle</h3>
        <select ref='subtitle' >
            {subtitleOptions}
        </select>
        <br />
        <br />
        <input className="submitButton" type='submit' value='Submit'/>
       
       </form> 
      </div>
    );
  }
}

export default AddProject;
