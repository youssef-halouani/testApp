import React, { Component } from 'react';
import UserCard from './userCard';
import '../style.css'

export default class postPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: []
        }
    }

    componentDidMount = () => {
        this.getUsers();

    }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ userlist: json }))
    };


    render() {
        return (
            <div className='user-card'>
                {this.state.userlist.map(el => (<UserCard contact={el} />))}
            </div>
        )
    }
}
