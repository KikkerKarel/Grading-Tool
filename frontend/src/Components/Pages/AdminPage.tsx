import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import QuickCard from "../QuickCard/QuickCard";

interface props {
}

class AdminPage extends Component<props> {

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <section className="content-container">
                    <QuickCard image="Images/Dev-test" text="Maak examen" link="/create-exam" title="Maak examen"/>
                    <QuickCard image="Images/Dev-test" text="Maak gebruiker" link="/create-user" title="Maak gebruiker"/>
                    <QuickCard image="Images/Dev-test" text="Maak Vraag" link="/create-question" title="Maak vraag"/>

                </section>
                <Footer/>
            </div>
        );
    }
}

export default AdminPage