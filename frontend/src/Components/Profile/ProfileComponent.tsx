import React, {Component} from 'react';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import './Profile.css';
import axios from 'axios';


class ProfileComponent extends Component
{
    state = {
        username: ""
    }

   async componentDidMount() {
        await axios.get(`/api/users/me`).then(response => {
            this.setState({
                username: response.data
            })
        })
       console.log(this.state.username);
    }


    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>

                <div className="content-main">

                </div>

                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ProfileComponent;