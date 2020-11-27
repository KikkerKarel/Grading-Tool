package gps.s3.correctingtool.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@IdClass(ExamItemId.class)
@Table(name = "exam_item")
public class ExamItem {

    @Id
    @Column(name = "exam_id", insertable = false, updatable = false)
    private int examId;

    @Id
    @Column(name = "question_id")
    private int questionId;

    private String textAnswer;

    private Integer mpAnswer;

    private Integer score;

    private Boolean gradedCorrect;

    @OneToOne
    @JoinColumn(insertable = false, updatable = false)
    private Question question;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(insertable = false, updatable = false)
    private Exam exam;

    public boolean isGraded()
    {
        return score != null;
    }
}
