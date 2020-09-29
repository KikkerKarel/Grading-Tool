import React, {Component} from "react";
import "./Footer.css"

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {year : new Date().getFullYear()};
    }
    render(){
        return(
            <div className="main-footer">
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Gradest INC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        );
    }
}
export default Footer;