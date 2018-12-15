import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api'
import './styles.css';

export default class main extends Component{
    state = {
        projects:[],
        projectInfo:{},
        page: 1,
    }
    componentDidMount(){
        this.loadSocialProjects();
    }

    loadSocialProjects = async (pageNumber = 1) => {
        const response = await api.get(`/projects?page=${pageNumber}`)
        const {docs,...projectInfo} = response.data;
        this.setState({projects: docs,projectInfo: projectInfo,page:pageNumber})

    }
    prevPage = () =>{
        const{page} = this.state;
        if(page === 1) return;
        const pageNumber = page-1;
        this.loadSocialProjects(pageNumber);
    }
    nextPage = () => {
        const{page,projectInfo} = this.state;
        if(page === projectInfo.pages) return;
        const pageNumber = page+1;
        this.loadSocialProjects(pageNumber);
    };


    deleteProject = async (id,page) =>{
        await api.delete(`/projects/${id}`);
        this.loadSocialProjects(page)
    }

    render(){
        const { projects,page,projectInfo } = this.state;
        return (
            <div className='project-list'>
                {projects.map(project =>(
                <article key={project._id}>
                <strong>{project.name}</strong>
                <p>{project.address}</p>
                <Link to = {`/projects/${project._id}`}>Acessar</Link>
                <button onClick={() =>this.deleteProject(project._id,page)}>Delete</button>
                <Link to = {'/projects/editproject/'+project._id}> Edit</Link>
                </article>

                ))}
            
            <div className='actions'>
                <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                <Link to = '/projects/newproject'> <button>New Project</button></Link>
                <button disabled={projectInfo.pages===page} onClick={this.nextPage}>Proxima</button>
            </div>
            </div>
        );
    }
}