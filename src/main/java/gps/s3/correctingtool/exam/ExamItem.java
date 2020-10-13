package gps.s3.correctingtool.exam;

import javax.persistence.*;

@Entity
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

    private int mpAnswer;

    private Boolean gradedCorrect;

    public int getExamId() {
        return examId;
    }

    public ExamItem setExamId(int examId) {
        this.examId = examId;
        return this;
    }

    public int getQuestionId() {
        return questionId;
    }

    public ExamItem setQuestionId(int questionId) {
        this.questionId = questionId;
        return this;
    }

    public String getTextAnswer() {
        return textAnswer;
    }

    public ExamItem setTextAnswer(String textAnswer) {
        this.textAnswer = textAnswer;
        return this;
    }

    public int getMpAnswer() {
        return mpAnswer;
    }

    public ExamItem setMpAnswer(int mpAnswer) {
        this.mpAnswer = mpAnswer;
        return this;
    }

    public Boolean getGradedCorrect() {
        return gradedCorrect;
    }

    public ExamItem setGradedCorrect(Boolean gradedCorrect) {
        this.gradedCorrect = gradedCorrect;
        return this;
    }
}
