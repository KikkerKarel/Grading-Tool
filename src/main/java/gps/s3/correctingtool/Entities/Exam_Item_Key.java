package gps.s3.correctingtool.Entities;

import com.sun.istack.NotNull;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class Exam_Item_Key implements Serializable {
    @NotNull
    private int exam_id;

    @NotNull
    private int question_id;

    public Exam_Item_Key() {
    }

    public Exam_Item_Key(int exam_id, int question_id) {
        this.exam_id = exam_id;
        this.question_id = question_id;
    }

    public int getId() {
        return exam_id;
    }

    public void setId(int exam_id) {
        this.exam_id = exam_id;
    }

    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exam_Item_Key that = (Exam_Item_Key) o;
        return exam_id == that.exam_id &&
                question_id == that.question_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(exam_id, question_id);
    }
}
