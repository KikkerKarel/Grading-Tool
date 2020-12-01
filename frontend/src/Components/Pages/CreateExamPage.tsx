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
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <section className="content-container">
                    <CreateExamForm> </CreateExamForm>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default CreateExamPage