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
        Exam: [],
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

    formatDate()
    {
        return moment(`${this.state.lastLogin}`).utc().format("DD/MM/YYYY hh:mm:ss a");
    }


    render() {
        const username = this.state.username;
        const lastLogin = this.formatDate();
        let amount = this.state.Exam.filter((event:any) => event.status === "NOT_GRADED").length;

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>

                <div className="content-main">
                    <header className="user-header"> { username } </header>
                    <h1 className="lastLogin-h1"> Laatste login: { lastLogin }</h1>
                    <h2 className="toDoAmount"> Aantal examens nog na te kijken: { amount }</h2>
                </div>

                {/*<div className="grade-div" id="toDo">*/}
                {/*    <header className="grade-header"> Nog na te kijken </header>*/}
                {/*    {*/}
                {/*        this.state.Exam.map((exam:any) => {*/}
                {/*            if(exam.status === "NOT_GRADED")*/}
                {/*            {*/}
                {/*                return <div className="grade-exam">*/}
                {/*                    <ListGroup className="grade-exam-list">*/}
                {/*                        <ListGroup.Item id="toGrade"> ID: {exam.id} </ListGroup.Item>*/}
                {/*                        <ListGroup.Item id="toGrade"> Status: {exam.status} </ListGroup.Item>*/}
                {/*                        <ListGroup.Item id="toGrade"> Student: {exam.studentName} </ListGroup.Item>*/}
                {/*                    </ListGroup>*/}
                {/*                </div>*/}
                {/*            }*/}
                {/*        })*/}
                {/*    }*/}
                {/*</div>*/}

                <div className="grade-div" id="done">
                    <header className="grade-header"> Nakijk geschiedenis </header>
                    {
                        this.state.Exam.reverse().map((exam:any) => {
                            if (exam !== null)
                            {
                                if (exam.status === "GRADED")
                                {
                                    return <div className="grade-exam">
                                        <ListGroup className="grade-exam-list">
                                            <ListGroup.Item  id="graded"> ID: {exam.id} </ListGroup.Item>
                                            <ListGroup.Item  id="graded"> Status: {exam.status} </ListGroup.Item>
                                            <ListGroup.Item  id="graded"> Student: {exam.studentName} </ListGroup.Item>
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