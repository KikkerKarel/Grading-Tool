package gps.s3.correctingtool.exam;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "text_answer")
public class TextAnswer {

    @Id
    private int questionId;

    @Column(name = "answer_text")
    private String value;

    public int getQuestionId() {
        return questionId;
    }

    public TextAnswer setQuestionId(int questionId) {
        this.questionId = questionId;
        return this;
    }

    public String getValue() {
        return value;
    }

    public TextAnswer setValue(String value) {
        this.value = value;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TextAnswer that = (TextAnswer) o;
        return getQuestionId() == that.getQuestionId() &&
                Objects.equals(getValue(), that.getValue());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getQuestionId(), getValue());
    }
}
