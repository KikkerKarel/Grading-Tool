package gps.s3.correctingtool.entity;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Exam {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @Enumerated(EnumType.STRING)
    private ExamStatus status;

    @Column(nullable = false)
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "examinerId", referencedColumnName = "id")
    private User examiner;

    @OneToMany
    @JoinColumn(name="examId", nullable=false)
    private List<ExamItem> items;
}