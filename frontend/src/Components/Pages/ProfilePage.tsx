import React, {Component} from "react";
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