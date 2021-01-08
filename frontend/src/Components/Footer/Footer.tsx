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
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Gradest INC | Alle rechten voorbehouden | Servicevoorwaarden |
                        Privacy
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;