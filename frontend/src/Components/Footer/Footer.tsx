import * as React from "react";
import {Component, Props} from "react";
import "./Footer.css"

class Footer extends Component{
    constructor(props: Props<any>) {
        super(props);
        this.state = {year : new Date().getFullYear()};
    }
    render(){
        return(
            <div className="main-footer">
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Gradest INC | Alle rechten voorbehouden | Servicevoorwaarden | Privacy
                    </p>
                </div>
                <div className="row" style={{fontSize: '0.9rem'}}>
                    <span className="col-12 text-white small m-0 p-0">[cluster-1] @ {process.env.REACT_APP_AXIOS_BASE_URL}</span>
                    <span className="col-12 text-white small m-0 p-0">build 1.0 ({process.env.NODE_ENV})</span>
                </div>
            </div>
        );
    }
}
export default Footer;