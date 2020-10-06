import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    Exams: [],
  };

  async componentDidMount() {
    const response = await fetch('/question/all');
    const body = await response.json();
    this.setState({ Exams: body, isLoading: false });
  }

  render() {
    const {Exams, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>JUG List</h2>

              {/*{Exams.map(Role => <h1>{Role.student_name}</h1>)}*/}
              {/*{users.map(user => <h1>{user.question_id}</h1>*/}
              {/*    // <div key={user.id}>*/}
              {/*    //   {user.username}*/}
              {/*    // </div>*/}
              {/*)}*/}
            </div>
          </header>
        </div>
    );
  }
}

export default App