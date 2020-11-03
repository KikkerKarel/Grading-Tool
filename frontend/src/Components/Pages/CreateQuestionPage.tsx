import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import CreateQuestionForm from "../CreateQuestion/CreateQuestionForm";
import QuickForm from "../QuickForm/QuickForm";


class CreateQuestionPage extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <section className="content-container">
                    <CreateQuestionForm  />
                </section>
                <Footer/>
            </div>
        );
    }
}

export default CreateQuestionPage