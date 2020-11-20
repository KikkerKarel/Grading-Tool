package gps.s3.correctingtool.entity;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class CorrectAnswer {
    @Id
    private int questionId;

    private String text;
}