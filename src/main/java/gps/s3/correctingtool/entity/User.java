package gps.s3.correctingtool.entity;

import java.time.Instant;

public class User {

    private long id;
    private String username, password;
    private Instant registerDate, lastLogin;

    public long getId() {
        return id;
    }

    public User setId(long id) {
        this.id = id;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public User setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public User setPassword(String pw) {
        this.password = pw;
        return this;
    }

    public Instant getRegisterDate() {
        return registerDate;
    }

    public User setRegisterDate(Instant registerDate) {
        this.registerDate = registerDate;
        return this;
    }

    public Instant getLastLogin() {
        return lastLogin;
    }

    public User setLastLogin(Instant lastLogin) {
        this.lastLogin = lastLogin;
        return this;
    }
}

