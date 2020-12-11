package gps.s3.correctingtool.entity;

import com.fasterxml.jackson.annotation.JsonGetter;
import lombok.Data;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Exam {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private ExamStatus status;

    @Column(nullable = false)
    private String examName;

    @ManyToOne
    @JoinColumn(name = "examinerId", referencedColumnName = "id")
    private User examiner;

    @OneToMany
    @JoinColumn(name="examId")
    private List<ExamItem> items = new ArrayList<>();

    @JsonGetter("progress")
    public long getProgress()
    {
        long total = items.stream().filter(examItem -> examItem.getQuestion().getType() == QuestionType.TEXT).filter(ExamItem::isGraded).count();
        long dividedBy = items.stream().filter(examItem -> examItem.getQuestion().getType() == QuestionType.TEXT).count();

        if (dividedBy == 0)
            return 100;

        return total * 100 / dividedBy;
    }
}