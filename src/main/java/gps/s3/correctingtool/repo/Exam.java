package gps.s3.correctingtool.repo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Exam {

    @Id
    private int id;
    private String studentName;
    private int status;
    private int examinerId;

}
