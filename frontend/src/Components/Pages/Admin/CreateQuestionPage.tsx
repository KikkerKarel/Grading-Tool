import * as React from "react";
import {Component} from "react";
import '../../HeaderNavbar/HeaderNavbar.css';
import Footer from "../../Footer/Footer";
import HeaderNavbar from "../../HeaderNavbar/HeaderNavbar";
import CreateQuestionForm from "../../Admin/CreateQuestion/CreateQuestionForm";
import AuthService from "../../../Services/auth.service";
import {Redirect} from "react-router";
import "../CSS/Admin.css";

class CreateQuestionPage extends Component {
   componentDidMount() {
       document.title="Gradest | Vraag aanmaken";
   }

    render() {
        if(!AuthService.isLoggedIn())
            return <Redirect to='/inloggen'/>

        let user : any = localStorage.getItem("user");

        if(user.toLowerCase() !== "admin" && user.toLowerCase() !== "stephan" && user === null)
            return <Redirect to='./examens'/>

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar />
                </div>
                <section className="content-container contentcenter mt-5">
                    <CreateQuestionForm />
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default CreateQuestionPage