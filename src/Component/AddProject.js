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
        ],
        isCheck: [
            'Checked', 'Unchecked'
        ]
    }
    handleSubmit(e){
        if(this.state.value === '') {
            alert('Title is required!!')
        } else {
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                subtitle:this.refs.subtitle.value,
                isChecked:this.refs.isChecked.value
                
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
    let checkOptions = this.props.isCheck.map(isChecked => {
        return <option key={isChecked} value={isChecked}>{isChecked}</option>
    })
    return (
      <div className="addProject card">
       <h3>Add Project</h3>
       <form onSubmit={this.handleSubmit.bind(this)}>
        <h3>Title</h3>
        <input type='text' ref='title'/>
        <div className='titleWidth' style={{width: '200px'}}>
            <h3 style={{float: 'left'}} >Subtitle</h3>
            <h3 style={{ float:'right'}}>Is Check</h3>
         </div>
        <select ref='subtitle' >
            {subtitleOptions}
        </select>
        
        <select ref='isChecked' style={{marginLeft: 35}}>
            {checkOptions}
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
