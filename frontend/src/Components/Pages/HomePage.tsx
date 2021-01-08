import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        document.title="Gradest | Home";
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <section className="content-container">
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default HomePage