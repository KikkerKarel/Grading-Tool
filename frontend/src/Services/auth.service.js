import axios from "axios";

class AuthService {
    login(username, password) {
        return axios
            .post("login", { username, password })
            .then((response) => {
                console.log(response);

                if (response.status === 200 && response.data.token) {
                    localStorage.setItem("user", username)
                    localStorage.setItem("token", response.data.token)
                    console.log("Set token!")
                    return localStorage.getItem("token");
                }
                return response;
            });
    }

    isLoggedIn(){
        return localStorage.getItem("token") != null;
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    register(username, password) {
        return axios.post("api/users/register", {
            username,
            password,
        });
    }
}

export default new AuthService();