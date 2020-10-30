package gps.s3.correctingtool.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.Instant;
import java.util.Collection;

@Entity(name = "user")
public class AppUser implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;

    @JsonIgnore
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

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return password != null;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public AppUser setUsername(String username) {
        this.username = username;
        return this;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
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

