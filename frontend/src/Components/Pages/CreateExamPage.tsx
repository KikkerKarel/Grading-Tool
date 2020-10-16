import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import QuickCard from "../QuickCard/QuickCard";
import QuickForm from "../QuickForm/QuickForm";

interface props {
}

const array = [
    {"label" : "test","type" : "text", "placeholder" : "test" }
];

class CreateExamPage extends Component<props> {

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <section className="content-container">
                    {/*<QuickForm data={[{"label":"test","type":"text","placeholder":"Hoi"}]}/>*/}
<QuickForm data={array}/>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default CreateExamPage