package gps.s3.correctingtool.entity;

import lombok.Data;
import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private String text;

    @Enumerated(EnumType.STRING)
    private QuestionType type;

    @OneToMany
    @JoinColumn(name = "questionId", referencedColumnName = "id")
    private Collection<ChoiceAnswer> choices;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "questionId")
    private CorrectAnswer correctAnswer;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "questionId")
    private QuestionSettings settings;
}