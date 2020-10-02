import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import ExamensPage from "./components/ExamensPage";
import SettingsPage from "./components/SettingsPage";
import CoursesPage from "./components/CoursesPage";
import LogoutPage from "./components/LogoutPage";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/examens">
                    <ExamensPage/>
                </Route>
                <Route path="/courses">
                    <CoursesPage/>
                </Route>
                <Route path="/instellingen">
                    <SettingsPage/>
                </Route>
                <Route path="/logout">
                    <LogoutPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
