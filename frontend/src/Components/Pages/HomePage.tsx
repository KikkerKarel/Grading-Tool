import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import ExamTable from "../ExamTable/ExamTable";

class HomePage extends Component {
    state = {

    };

    async componentDidMount() {

    }

    render() {


        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent/>
                </div>
                <section className="content-container">
                </section>
                <Footer/>
            </div>
        );
    }
}

export default HomePage