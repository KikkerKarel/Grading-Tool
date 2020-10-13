package gps.s3.correctingtool.exam;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "mp_answer")
public class MultipleChoiceAnswer {

    @Id
    private int id;

    @Column(name = "question_id")
    private int questionId;

    @Column(name = "answer_text")
    private String value;

    private boolean isCorrect;

    public int getId() {
        return id;
    }

    public MultipleChoiceAnswer setId(int id) {
        this.id = id;
        return this;
    }

    public int getQuestionId() {
        return questionId;
    }

    public MultipleChoiceAnswer setQuestionId(int questionId) {
        this.questionId = questionId;
        return this;
    }

    public String getValue() {
        return value;
    }

    public MultipleChoiceAnswer setValue(String value) {
        this.value = value;
        return this;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public MultipleChoiceAnswer setCorrect(boolean correct) {
        isCorrect = correct;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MultipleChoiceAnswer that = (MultipleChoiceAnswer) o;
        return getId() == that.getId() &&
                getQuestionId() == that.getQuestionId() &&
                isCorrect() == that.isCorrect() &&
                Objects.equals(getValue(), that.getValue());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getQuestionId(), getValue(), isCorrect());
    }
}
