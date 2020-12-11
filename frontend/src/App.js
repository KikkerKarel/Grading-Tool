import React from 'react';

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./Components/Pages/HomePage";
import ExamensPage from "./Components/Pages/ExamensPage";
import SettingsPage from "./Components/Pages/SettingsPage";
import LogoutPage from "./Components/Pages/LogoutPage";
import QuestionPage from "./Components/Pages/QuestionPage";
import AdminPage from "./Components/Pages/Admin/AdminPage";
import CreateExamPage from "./Components/Pages/Admin/CreateExamPage";
import CreateQuestionPage from "./Components/Pages/Admin/CreateQuestionPage";
import CreateExamItemPage from "./Components/Pages/Admin/CreateExamItemPage";
import LoginPage from "./Components/Pages/LoginPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/inloggen">
                    <LoginPage/>
                </Route>
                <Route path="/instellingen">
                    <SettingsPage/>
                </Route>
                <Route path="/examens">
                    <ExamensPage/>
                </Route>
                <Route path="/vraag">
                    <QuestionPage/>
                </Route>
                <Route exact={true} path="/admin">
                    <AdminPage/>
                </Route>
                <Route path="/admin/maak-examen">
                    <CreateExamPage/>
                </Route>
                <Route path="/admin/maak-vraag">
                    <CreateQuestionPage/>
                </Route>
                <Route path="/admin/maak-examenitem">
                    <CreateExamItemPage/>
                </Route>
                <Route path="/uitloggen">
                    <LogoutPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App