import * as React from "react";
import {Component, Props} from "react";
import "./Footer.css"

class Footer extends Component {
    constructor(props: Props<any>) {
        super(props);
        this.state = {year: new Date().getFullYear()};
    }

    render() {
        return (
            <div className="main-footer">
                <div className="placecontent">
                    <span className="xahrefs"> &copy;{new Date().getFullYear()} Gradest INC </span>
                    <span> | </span>
                    <span className="xahrefs"> Alle rechten voorbehouden </span>
                    <span> | </span>
                    <a className="ahrefs" href={'https://www.citrusandriessen.nl/en/disclaimer/'}> Disclaimer </a>
                    <span> | </span>
                    <a className="ahrefs" href={'https://www.citrusandriessen.nl/en/privacy/'}> Privacy </a>
                </div>
            </div>
        );
    }
}

export default Footer;