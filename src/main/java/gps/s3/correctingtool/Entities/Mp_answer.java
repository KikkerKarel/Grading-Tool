package gps.s3.correctingtool.Entities;

import javax.persistence.*;

// Multiple Choice Answer
@Entity
@Table(name = "mp_answer")
@SecondaryTable(name = "question", pkJoinColumns = @PrimaryKeyJoinColumn(name = "question_type"))
public class Mp_answer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "answer_text")
    private String answerText;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "question_id")
    private Question question;

    @Column(name = "is_correct")
    private boolean isCorrect;

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

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }
}
