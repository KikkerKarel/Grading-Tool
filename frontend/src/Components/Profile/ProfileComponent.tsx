import React, {Component} from 'react';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import './Profile.css';
import axios from 'axios';
import {ListGroup} from "react-bootstrap";
import moment from "moment";

class ProfileComponent extends Component
{
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
               Exam: data.data
           })
       })
    }

    formatDate()
    {
        return moment(`${this.state.lastLogin}`).utc().format("DD/MM/YYYY hh:mm:ss a");
    }


    render() {
        const username = this.state.username;
        const lastLogin = this.formatDate();

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>

                <div className="content-main">
                    <header className="user-header"> { username } </header>
                    <h1 className="lastLogin-h1"> Laatste login: { lastLogin }</h1>
                </div>

                <div className="history-div">
                    <header className="history-header"> Nakijk geschiedenis </header>
                    {
                        this.state.Exam.reverse().map((exam:any) => {
                            if (exam !== null)
                            {
                                if (exam.status === "GRADED")
                                {
                                    return <div className="history-exam">
                                        <ListGroup className="history-exam-list">
                                            <ListGroup.Item> ID: {exam.id} </ListGroup.Item>
                                            <ListGroup.Item> Status: {exam.status} </ListGroup.Item>
                                            <ListGroup.Item> Student: {exam.studentName} </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                }
                            }
                        })
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ProfileComponent;