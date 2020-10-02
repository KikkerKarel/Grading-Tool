package gps.s3.correctingtool.Entities;

import javax.persistence.*;

// Exam status
@Entity
@Table(name = "exam_status")
@SecondaryTable(name = "exam", pkJoinColumns = @PrimaryKeyJoinColumn(name = "status"))
public class ExamStatus {
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
