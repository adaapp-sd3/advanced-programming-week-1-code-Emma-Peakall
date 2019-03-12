import React, { Component } from 'react';

class Task extends Component {

    constructor() {
        super()
        this.state = {
            accepted: true,
        }
    }
    handleAccpetTask = () => {
        this.setState({
            accepted: !this.state.accepted
        })
    }
    render() {
        return (
            <div className="task">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                {this.state.accpted && (<p>This task has been accepted</p>
                    <button>onClick={}>Accept task</button>
            </div>
                        )))}                        export default Task
