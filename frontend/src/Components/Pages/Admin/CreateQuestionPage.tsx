import * as React from "react";
import '../../HeaderNavbar/HeaderNavbar.css';
import {Component} from "react";
import Footer from "../../Footer/Footer";
import '../../../Dashboard.css'
import HeaderNavbar from "../../HeaderNavbar/HeaderNavbar";
import CreateQuestionForm from "../../Admin/CreateQuestion/CreateQuestionForm";
import AuthService from "../../../Services/auth.service";
import {Redirect} from "react-router";
import "../CSS/Admin.css"

class CreateQuestionPage extends Component {
    render() {
        if(!AuthService.isLoggedIn())
            return <Redirect to='/login' />

        let user : any = localStorage.getItem("user");

        if(user.toLowerCase() !== "admin")
            return <Redirect to='/examens' />

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar />
                </div>
                <section className="content-container contentcenter">
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