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
                <section className="content-container">
                    <CreateExamItemForm />
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default CreateExamItemPage;