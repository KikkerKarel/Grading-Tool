package gps.s3.correctingtool.Entities;

import javax.persistence.*;

// Exam
@Entity
@Table(name = "exam")
@SecondaryTables({
        @SecondaryTable(name = "exam_item", pkJoinColumns = @PrimaryKeyJoinColumn(name = "exam_id")),
        @SecondaryTable(name = "user", pkJoinColumns = @PrimaryKeyJoinColumn(name = "id")),
        @SecondaryTable(name = "exam_status", pkJoinColumns = @PrimaryKeyJoinColumn(name = "id"))
})
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int exam_id;

    @Column(name = "student_name")
    private String studentName;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "status")
    private ExamStatus Status;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "examiner_id")
    private User user;

    public int getExam_id() {
        return exam_id;
    }

    public void setExam_id(int exam_id) {
        this.exam_id = exam_id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public ExamStatus getStatus() {
        return Status;
    }

    public void setStatus(ExamStatus status) {
        Status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
