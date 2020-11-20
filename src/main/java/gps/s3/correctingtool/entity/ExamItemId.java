package gps.s3.correctingtool.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamItemId implements Serializable {
    private int examId;

    private int questionId;
}