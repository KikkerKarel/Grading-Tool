import * as React from "react";
import '../../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../../Footer";
import '../../../Dashboard.css'
import NavbarComponent from "../../Navbar/NavbarComponent";
import CreateExamItemForm from "../../Admin/CreateExamItem/CreateExamItemForm";
import AuthService from "../../../Services/auth.service";
import {Redirect} from "react-router";

class CreateExamItemPage extends Component {
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
                    <CreateExamItemForm />
                </section>
                <Footer/>
            </div>
        );
    }
}

export default CreateExamItemPage;