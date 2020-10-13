package gps.s3.correctingtool.user;

import javax.persistence.*;
import java.time.Instant;

@Entity(name = "user")
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    @Column(name = "password_hash")
    private String password;
    private Instant registerDate, lastLogin;

    public long getId() {
        return id;
    }

    public AppUser setId(long id) {
        this.id = id;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public AppUser setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public AppUser setPassword(String pw) {
        this.password = pw;
        return this;
    }

    public Instant getRegisterDate() {
        return registerDate;
    }

    public AppUser setRegisterDate(Instant registerDate) {
        this.registerDate = registerDate;
        return this;
    }

    public Instant getLastLogin() {
        return lastLogin;
    }

    public AppUser setLastLogin(Instant lastLogin) {
        this.lastLogin = lastLogin;
        return this;
    }
}

