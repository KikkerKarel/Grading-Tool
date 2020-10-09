package gps.s3.correctingtool.exam;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Exam {

    @Id
    private int id;
    private int status;
    private int examinerId;
    private String studentName;

    @OneToMany
    @JoinColumn(name="exam_id", nullable=false)
    private List<ExamItem> items;

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

    public int getExaminerId() {
        return examinerId;
    }

    public Exam setExaminerId(int examinerId) {
        this.examinerId = examinerId;
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
}
