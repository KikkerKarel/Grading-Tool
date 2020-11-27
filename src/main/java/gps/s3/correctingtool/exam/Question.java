package gps.s3.correctingtool.exam;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Question {

    public static final int TYPE_MULTIPLE_CHOICE = 1;
    public static final int TYPE_TEXT_INPUT = 2;

    @Id
    private int id;

    @Column(name = "question_text")
    private String text;

    @Column(name = "question_type")
    private int type;

    @OneToMany
    @JoinColumn(name = "question_id", referencedColumnName = "id")
    private Collection<MultipleChoiceAnswer> choices;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "question_id")
    private TextAnswer textAnswer;

    public Collection<MultipleChoiceAnswer> getChoices() {
        return choices;
    }

    public Question setChoices(Collection<MultipleChoiceAnswer> choices) {
        this.choices = choices;
        return this;
    }

    public TextAnswer getTextAnswer() {
        return textAnswer;
    }

    public Question setTextAnswer(TextAnswer textAnswer) {
        this.textAnswer = textAnswer;
        return this;
    }

    public int getId() {
        return id;
    }

    public Question setId(int id) {
        this.id = id;
        return this;
    }

    public String getText() {
        return text;
    }

    public Question setText(String text) {
        this.text = text;
        return this;
    }

    public int getType() {
        return type;
    }

    public Question setType(int type) {
        this.type = type;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Question question = (Question) o;
        return getId() == question.getId() &&
                getType() == question.getType() &&
                Objects.equals(getText(), question.getText());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getText(), getType());
    }
}
