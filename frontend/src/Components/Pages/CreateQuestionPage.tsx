import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import CreateQuestionForm from "../Admin/CreateQuestion/CreateQuestionForm";


class CreateQuestionPage extends Component {

    render() {
        return (
            <div className="page-container">
                <section className="content-container">
                    <CreateQuestionForm  />
                </section>
                <Footer/>
            </div>
        );
    }
}

export default CreateQuestionPage