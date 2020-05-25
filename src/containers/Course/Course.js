import React, { Component } from 'react';

class Course extends Component {
    render() {
        let titleString = this.props.location.search;
        titleString = titleString.slice(1);
        return (
            <div>
                <h1>{titleString}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;