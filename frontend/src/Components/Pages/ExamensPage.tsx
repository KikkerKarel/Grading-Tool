import * as React from "react";
import {Component} from "react";
import '../Navbar/Navbar.css';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import '../../Dashboard.css'
import axios from 'axios'
import ExamTable from "../ExamTable/ExamTable";

interface props {
}

class ExamensPage extends Component<props, {}> {
    state = {
        isLoading: true,
        Exams: []
    };

    async componentDidMount() {
        axios.get(`/api/exams/find/all`).then(response => this.setState({Exams: response.data, isLoading: false}));
    }

    render() {
        const {Exams, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <>
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent/>
                </div>
                <div className="content-container">
                    <h1 className="text">Klik hieronder op het examen dat u wilt beoordelen:</h1>
                    <ExamTable data={Exams}/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>

             </div>
                </>
        );
    }
}

export default ExamensPage