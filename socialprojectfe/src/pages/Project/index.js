import React,{Component} from 'react'
import api from '../../services/api'
import './style.css'
export default class Project extends Component{
    state={
        project:{},
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/projects/${id}`)
        this.setState({project:response.data})
    }
    render(){
        const {project} = this.state;
        console.log(project)
        return(
            
            <div className="project-info">
                <h1>{project.name}</h1>
                <p>{project.address}</p>
                <p>{project.number}</p>
            </div>

        )
    }
}