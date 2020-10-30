import axios from "axios";

class AuthService {
    login(username, password) {
        return axios
            .post("login", { username, password })
            .then((response) => {
                if (response.headers["Authorization"]) {
                    localStorage.setItem("token", response.headers["Authorization"]);
                    return localStorage.getItem("token");
                }

                return response;

            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return axios.post("api/users/register", {
            username,
            password,
        });
    }
}

export default new AuthService();
