import * as React from "react";
import '../../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../../Footer";
import '../../../Dashboard.css'
import NavbarComponent from "../../Navbar/NavbarComponent";
import QuickCard from "../../Quick/QuickCard/QuickCard";
import {CardDeck} from "react-bootstrap";
import AuthService from "../../../Services/auth.service";
import {Redirect} from "react-router";

interface props {
}

class AdminPage extends Component<props> {
    render() {
        if(!AuthService.isLoggedIn())
            return <Redirect to='/login' />

        let user : any = localStorage.getItem("user");

        if(user.toLowerCase() !== "admin")
            return <Redirect to='/examens' />

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <section className="content-container contentcenter">
                    <CardDeck>
                        <QuickCard image="Images/Dev-test" text="Maak een nieuw examen en koppel die." link="admin/maak-examen" title="Maak examen"/>
                        <QuickCard image="Images/Dev-test" text="Koppel een examen item aan een examen." link="admin/maak-examenitem" title="Koppel examen item"/>
                        <QuickCard image="Images/Dev-test" text="Maak een nieuwe examen vraag." link="admin/maak-vraag" title="Maak examen vraag"/>
                    </CardDeck>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default AdminPage