import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol style={{ textAlign: 'left' }}>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Pass the course ID to the "Course" page and output it there</li>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Load the "Course" component as a nested component of "Courses"</li>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Add a 404 error page and render it for any unknown routes</li>
          <li style={{ color: 'green', fontWeight: 'bold' }}>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
        <BrowserRouter>
          <div>
            <ul style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              listStyle: 'none'

            }}>
              <li style={{ fontWeight: 'bold', marginRight: '20px' }}>
                <NavLink to="/courses" exact>Courses</NavLink>
              </li>
              <li style={{ fontWeight: 'bold' }}>
                <NavLink to="/users" exact>Users</NavLink>
              </li>
            </ul>
            <Switch>
              <Route path="/courses" exact component={Courses} />
              <Route path="/users" component={Users} />
              <Route path="/courses/:id" exact component={Course} />
              <Route render={() => <h1>404 page not found</h1>} />
              <Redirect from='/users/:id' to='/users/profile/:id' />
            </Switch>
          </div>

        </BrowserRouter>



      </div >
    );
  }
}

export default App;
