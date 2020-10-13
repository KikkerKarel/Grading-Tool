import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import '../../Dashboard.css'
import ExamTable from "../ExamTable/ExamTable";


interface props {
}


class ExamensPage extends Component<props, {}> {
    state = {
        isLoading: true,
        Exams: []
    };

    async componentDidMount() {
        const response = await fetch('/api/exams/find/all');
        const body = await response.json();
        this.setState({Exams: body, isLoading: false});
    }
    render() {
        const {Exams, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent/>
                </div>cdd
                <section className="content-container">
                    <h1 className="text">Klik hieronder op het examen dat u wilt beoordelen:</h1>
                    <ExamTable data={Exams}/>
                </section>
                <Footer/>
            </div>

        );
    }
}

export default ExamensPage