import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import ExamensPage from "./Components/Pages/ExamensPage";
import LogoutPage from "./Components/Pages/LogoutPage";
import QuestionPage from "./Components/Pages/QuestionPage";
import AdminPage from "./Components/Pages/Admin/AdminPage";
import CreateExamPage from "./Components/Pages/Admin/CreateExamPage";
import CreateQuestionPage from "./Components/Pages/Admin/CreateQuestionPage";
import CreateExamItemPage from "./Components/Pages/Admin/CreateExamItemPage";
import LoginPage from "./Components/Pages/LoginPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import AdvicePage from "./Components/Pages/AdvicePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/advice">
                    <AdvicePage/>
                </Route>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route path="/examens">
                    <ExamensPage/>
                </Route>
                <Route path='/vraag/beoordelen/:examId' component={QuestionPage}>
                </Route>
                <Route path="/profiel">
                    <ProfilePage/>
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