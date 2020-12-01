import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import CreateExamItemForm from "../Admin/CreateExamItem/CreateExamItemForm";


class CreateExamItemPage extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <section className="content-container">
                    <CreateExamItemForm />
                </section>
                <Footer/>
            </div>
        );
    }
}

export default CreateExamItemPage;