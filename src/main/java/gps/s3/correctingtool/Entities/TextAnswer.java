package gps.s3.correctingtool.Entities;

import javax.persistence.*;

// Text answer
@Entity
@Table(name = "text_answer")
@SecondaryTable(name = "question", pkJoinColumns = @PrimaryKeyJoinColumn(name = "question_type"))
public class TextAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "answer_text")
    private String answerText;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "question_id")
    private Question question;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
