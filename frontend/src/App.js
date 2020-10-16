import React from 'react';

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import ExamensPage from "./Components/Pages/ExamensPage";
import CoursesPage from "./Components/Pages/CoursesPage";
import SettingsPage from "./Components/Pages/SettingsPage";
import LogoutPage from "./Components/Pages/LogoutPage";


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