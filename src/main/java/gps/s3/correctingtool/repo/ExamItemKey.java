package gps.s3.correctingtool.repo;

import javax.persistence.Embeddable;

@Embeddable
public class ExamItemKey {

    private int examId;
    private int questionId;

}
