package gps.s3.correctingtool.entity;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class ChoiceAnswer {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private int questionId;

    private String text;

    private boolean isCorrect;
}