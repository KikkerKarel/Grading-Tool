import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import '../../Dashboard.css'

interface props {
}

class CoursesPage extends Component<props> {

    render() {
        return (
            <div className="page-container">
                <section className="content-container">

                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>

        );
    }
}

export default CoursesPage