package gps.s3.correctingtool.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

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

    @OneToOne
    @JoinColumn(insertable = false, updatable = false)
    private Question question;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(insertable = false, updatable = false)
    private Exam exam;

    public Question getQuestion() {
        return question;
    }

    public ExamItem setQuestion(Question question) {
        this.question = question;
        return this;
    }

    public Exam getExam() {
        return exam;
    }

    public ExamItem setExam(Exam exam) {
        this.exam = exam;
        return this;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExamItem examItem = (ExamItem) o;
        return getExamId() == examItem.getExamId() &&
                getQuestionId() == examItem.getQuestionId() &&
                getMpAnswer() == examItem.getMpAnswer() &&
                Objects.equals(getTextAnswer(), examItem.getTextAnswer()) &&
                Objects.equals(getGradedCorrect(), examItem.getGradedCorrect()) &&
                Objects.equals(getExam(), examItem.getExam());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getExamId(), getQuestionId(), getTextAnswer(), getMpAnswer(), getGradedCorrect(), getExam());
    }
}
