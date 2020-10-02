package gps.s3.correctingtool.Entities;

import javax.persistence.*;

// User has role
@Entity
@Table(name = "user_has_role")
@SecondaryTables({
        @SecondaryTable(name = "role", pkJoinColumns = @PrimaryKeyJoinColumn(name = "id")),
        @SecondaryTable(name = "user", pkJoinColumns = @PrimaryKeyJoinColumn(name = "id"))
})
public class User_has_role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int exam_id;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "role_id")
    private Role role;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "user_id")
    private User user;

    public int getExam_id() {
        return exam_id;
    }

    public void setExam_id(int exam_id) {
        this.exam_id = exam_id;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
