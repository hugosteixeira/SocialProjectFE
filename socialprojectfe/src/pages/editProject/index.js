import React, {Component} from 'react';

import api from '../../services/api';
import './styles.css';

export default class newProject extends Component{
    state = {
        name:'',
        address:'',
        number: '',
        id :'',
    }
    componentDidMount(){
        this.setState({id : this.props.match.params.id});
        this.loadData();
        console.log(this.props.match.params.id)
        console.log(this.state.id)
    }
    handleSubmit = async () => {
        this.setState({id : this.props.match.params});
        let req = {
            name : this.state.name,
            address : this.state.address,
            number  : this.state.number,
        }
        const response = await api.put(`/projects/${this.state.id}`,req).then(function(){ window.location='/'})
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

     loadData = async ()=>  {
        const response = await api.get(`/projects/${this.state.id}`);
        this.setState({ name: response.data.name, address: response.data.address, number: response.data.number });
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