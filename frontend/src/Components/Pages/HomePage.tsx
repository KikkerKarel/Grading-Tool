import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";

class HomePage extends Component {
    state = {

    };

    async componentDidMount() {

    }

    render() {


        return (
            <div className="page-container">
                <div className="content-wrap">

                </div>
                <section className="content-container">
                </section>
                <Footer/>
            </div>
        );
    }
}

export default HomePage