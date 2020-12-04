import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import CreateExamForm from "../Admin/CreateExam/CreateExamForm";

interface props {
}


class CreateExamPage extends Component<props> {

    render() {
        return (
            <div className="page-container">
                <section className="content-container">
                    <CreateExamForm/>
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default CreateExamPage