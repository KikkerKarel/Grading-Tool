import React from 'react';

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import ExamensPage from "./components/Pages/ExamensPage";
import CoursesPage from "./components/Pages/CoursesPage";
import SettingsPage from "./components/Pages/SettingsPage";
import LogoutPage from "./components/Pages/LogoutPage";


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

export default App