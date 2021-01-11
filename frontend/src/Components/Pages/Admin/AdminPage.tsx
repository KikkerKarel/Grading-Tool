import * as React from "react";
import {Component} from "react";
import '../../HeaderNavbar/HeaderNavbar.css';
import Footer from "../../Footer/Footer";
import '../../Quick/Quick.css';
import HeaderNavbar from "../../HeaderNavbar/HeaderNavbar";
import QuickCard from "../../Quick/QuickCard/QuickCard";
import {CardDeck} from "react-bootstrap";
import AuthService from "../../../Services/auth.service";
import {Redirect} from "react-router";

class AdminPage extends Component {
    componentDidMount() {
        document.title="Gradest | Admin";
    }

    render() {
        if(!AuthService.isLoggedIn())
            return <Redirect to='./inloggen'/>

        let user : any = localStorage.getItem("user");

        if(user.toLowerCase() !== "admin" && user.toLowerCase() !== "stephan" && user === null)
            return <Redirect to='./examens'/>

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar />
                </div>
                <section className="content-container contentcenter mt-5">
                    <CardDeck>
                        <QuickCard image="Images/Dev-test" text="Maak een nieuw examen en koppel die." link="admin/maak-examen" title="Maak examen"/>
                        <QuickCard image="Images/Dev-test" text="Koppel een examen item aan een examen." link="admin/maak-examenitem" title="Koppel examen item"/>
                        <QuickCard image="Images/Dev-test" text="Maak een nieuwe examen vraag." link="admin/maak-vraag" title="Maak examen vraag"/>
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