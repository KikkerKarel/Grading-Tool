package gps.s3.correctingtool.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@IdClass(ExamItemId.class)
public class ExamItem {
    @Id
    private int examId;

    @Id
    private int questionId;

    private String studentTextAnswer;

    private Integer studentChoiceAnswer;

    private Boolean gradedCorrect;

    private Integer gradedScore;

    @OneToOne
    @JoinColumn(insertable = false, updatable = false, name = "questionId")
    private Question question;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(insertable = false, updatable = false, name = "examId")
    private Exam exam;

    public boolean isGraded(){
        return gradedCorrect != null;
    }
}