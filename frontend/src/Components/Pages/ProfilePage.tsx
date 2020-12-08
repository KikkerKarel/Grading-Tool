import React, {Component} from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import ProfileComponent from "../Profile/ProfileComponent";

class ProfilePage extends Component
{
    render() {
        return (
            <div className="page-container">
                <ProfileComponent />
            </div>
        );
    }
}

export default ProfilePage;