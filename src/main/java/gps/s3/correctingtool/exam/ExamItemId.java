package gps.s3.correctingtool.exam;

import java.io.Serializable;
import java.util.Objects;

public class ExamItemId implements Serializable {

    private int examId;

    private int questionId;

    public ExamItemId() {} //Empty constructor required for jackson-json conversion

    public ExamItemId(int examId, int questionId) {
        this.examId = examId;
        this.questionId = questionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExamItemId that = (ExamItemId) o;
        return examId == that.examId &&
                questionId == that.questionId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(examId, questionId);
    }
}
