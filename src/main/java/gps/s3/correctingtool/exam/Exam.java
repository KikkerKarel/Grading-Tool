package gps.s3.correctingtool.exam;

import gps.s3.correctingtool.user.AppUser;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Exam {

    @Id
    private int id;
    private int status;
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "examiner_id", referencedColumnName = "id")
    private AppUser examiner;

    @OneToMany
    @JoinColumn(name="exam_id", nullable=false)
    private List<ExamItem> items;

    public AppUser getExaminer() {
        return examiner;
    }

    public Exam setExaminer(AppUser examiner) {
        this.examiner = examiner;
        return this;
    }

    public int getId() {
        return id;
    }

    public Exam setId(int id) {
        this.id = id;
        return this;
    }

    public int getStatus() {
        return status;
    }

    public Exam setStatus(int status) {
        this.status = status;
        return this;
    }

    public String getStudentName() {
        return studentName;
    }

    public Exam setStudentName(String studentName) {
        this.studentName = studentName;
        return this;
    }

    public List<ExamItem> getItems() {
        return items;
    }

    public Exam setItems(List<ExamItem> items) {
        this.items = items;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exam exam = (Exam) o;
        return getId() == exam.getId() &&
                getStatus() == exam.getStatus() &&
                Objects.equals(getStudentName(), exam.getStudentName()) &&
                Objects.equals(getExaminer(), exam.getExaminer()) &&
                Objects.equals(getItems(), exam.getItems());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getStatus(), getStudentName(), getExaminer(), getItems());
    }
}
