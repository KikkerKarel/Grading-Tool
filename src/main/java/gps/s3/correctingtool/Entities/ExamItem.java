package gps.s3.correctingtool.Entities;

import javax.persistence.*;

//Exam Item
@Entity
@Table(name = "exam_item")
@SecondaryTables({
        @SecondaryTable(name = "question", pkJoinColumns = @PrimaryKeyJoinColumn(name = "question_type")),
        @SecondaryTable(name = "exam", pkJoinColumns = @PrimaryKeyJoinColumn(name = "id"))
})
public class ExamItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "exam_id")
    private Exam exam;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "question_id")
    private Question question;

    @Column(name = "text_answer")
    private String textAnswer;

    @Column(name = "mp_answer")
    private int mpAnswer;

    @Column(name = "graded_correct")
    private boolean gradedCorrect;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getTextAnswer() {
        return textAnswer;
    }

    public void setTextAnswer(String textAnswer) {
        this.textAnswer = textAnswer;
    }

    public int getMpAnswer() {
        return mpAnswer;
    }

    public void setMpAnswer(int mpAnswer) {
        this.mpAnswer = mpAnswer;
    }

    public boolean isGradedCorrect() {
        return gradedCorrect;
    }

    public void setGradedCorrect(boolean gradedCorrect) {
        this.gradedCorrect = gradedCorrect;
    }
}
