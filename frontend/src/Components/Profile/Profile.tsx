import React, {Component} from 'react';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import './Profile.css';
import axios from 'axios';
import {ListGroup} from "react-bootstrap";
import moment from "moment";

class Profile extends Component {
    state = {
        username: "",
        lastLogin: Date,
        examinerID: Number,
        Exam: []
    }

    async componentDidMount() {
        await axios.get(`/api/users/me`).then(response => {
            this.setState({
                username: response.data.username,
                lastLogin: response.data.lastLogin,
                examinerID: response.data.id
            })
        })

        await axios.get(`api/exams/examiner/${this.state.examinerID}`).then(data => {
            this.setState({
                Exam: data.data,
            })
        })
    }

    formatDate() {
        return moment(`${this.state.lastLogin}`).utc().format("DD/MM/YYYY hh:mm:ss a");
    }

    render() {
        const username = this.state.username;
        const lastLogin = this.formatDate();
        let amount = this.state.Exam.filter((event: any) => event.status === "NOT_GRADED"
            || event.status === "GRADING_IN_PROGRESS").length;

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <div className="content-main">
                    <header className="user-header text-center bold"> {username} </header>
                    <h1 className="lastLogin-h1 text-center bold">Laatste login: {lastLogin}</h1>
                    <h2 className="toDoAmount text-center bold">Aantal examens nog na te kijken: {amount}</h2>
                </div>
                <div className="grade-div text-center" id="done">
                    <header className="grade-header bold">Nakijk geschiedenis</header>
                    {
                        this.state.Exam.reverse().filter(
                            function (exam: any) {
                                return exam.status === "GRADED"
                            })
                            .map((exam: any) => {
                                return <div className="grade-exam">
                                    <ListGroup className="grade-exam-list">
                                        <ListGroup.Item id="graded"> ID: {exam.id} </ListGroup.Item>
                                        <ListGroup.Item id="graded"> Status: {exam.status} </ListGroup.Item>
                                        <ListGroup.Item id="graded"> Examen: {exam.examName} </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            })
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Profile;