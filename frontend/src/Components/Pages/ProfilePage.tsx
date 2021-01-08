import React, {Component} from "react";
import Profile from "../Profile/Profile";

class ProfilePage extends Component {
    componentDidMount() {
        document.title="Gradest | Profiel";
    }

    render() {
        return (
            <div className="page-container">
                <Profile/>
            </div>
        );
    }
}

export default ProfilePage;