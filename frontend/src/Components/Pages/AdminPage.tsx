import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import QuickCard from "../QuickCard/QuickCard";
import {CardDeck} from "react-bootstrap";

interface props {
}

class AdminPage extends Component<props> {

    render() {
        return (
            <div className="page-container">
                <section className="content-container">
                    <CardDeck>
                        <QuickCard image="Images/Dev-test" text="Maak examen" link="/create-exam" title="Maak examen"/>
                        <QuickCard image="Images/Dev-test" text="Maak examen Item" link="/create-examitem" title="Maak examen Item"/>
                        <QuickCard image="Images/Dev-test" text="Maak Vraag" link="/create-question" title="Maak vraag"/>
                    </CardDeck>

                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default AdminPage