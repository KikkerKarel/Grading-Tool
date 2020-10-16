import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent"
import QuestionTracker from "../QuestionsTrack/QuestionsTracker";

interface props {
}

class QuestionsPage extends Component<props> {

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <section className="content-container">
                    <QuestionTracker/>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default QuestionsPage