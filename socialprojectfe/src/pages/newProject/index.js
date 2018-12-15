import React, {Component} from 'react';

import api from '../../services/api';
import './styles.css';
import Main from '../main'

export default class newProject extends Component{
    state = {
        name:'',
        address:'',
        number: '',
    }
    handleSubmit = async () => {
        console.log(this.state);
        let req = {
            name : this.state.name,
            address : this.state.address,
            number  : this.state.number,
        }
        const response = await api.post(`/projects`,req).then(function(){ window.location='/'})
    }

    handleChangeName = (event)=> {
        this.setState({name: event.target.value});
    }
    handleChangeAddress = (event)=> {
        this.setState({address: event.target.value});
    }
    handleChangeNumber = (event)=> {
        this.setState({number: event.target.value});
    }
    render(){

        return (
            <div className='project-form'>
                <form>
                    <label>
                    Name: 
                    <input type="text" name="name" onChange={this.handleChangeName} />
                    </label>
                    <p/><label>
                    Address: 
                    <input type="text" name="address" onChange={this.handleChangeAddress}/>
                    </label>
                    <p/><label>
                    Number: 
                    <input type="text" name="number" onChange={this.handleChangeNumber}/>
                    </label>
                    <p/><button onClick={this.handleSubmit}>Enviar</button>
                </form>
            </div>
        );
    }
}