package gps.s3.correctingtool.dto;


public class AppUserDTO {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public AppUserDTO setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public AppUserDTO setPassword(String password) {
        this.password = password;
        return this;
    }
}
