import * as React from "react";
import {MenuItems} from "./MenuItems";
import './Navbar.css';
import {Component} from "react";
import {Button} from "react-bootstrap";
import '../Button.css';


class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render() {
        return (
            <nav className="NavbarItems fixed-top">
                <img src={process.env.PUBLIC_URL + '/Images/CitrusAndriessen.png'} className="Citrus-logo" alt="logo"/>
                <h1 className="navbar-logo">Gradest

                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>

                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :
                    'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button className="btn--medium">Log uit</Button>
            </nav>
        );
    }
}

export default Navbar