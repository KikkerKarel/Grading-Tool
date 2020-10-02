package gps.s3.correctingtool.Entities;

import javax.persistence.*;

// Roles
@Entity
@Table(name = "role")
@SecondaryTable(name = "user_has_role", pkJoinColumns = @PrimaryKeyJoinColumn(name = "role_id"))
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "title")
    private String title;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
