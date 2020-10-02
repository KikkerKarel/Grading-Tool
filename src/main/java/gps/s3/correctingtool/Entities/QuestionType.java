package gps.s3.correctingtool.Entities;

import javax.persistence.*;

// Question Type
@Entity
@Table(name = "question_type")
@SecondaryTable(name = "question", pkJoinColumns = @PrimaryKeyJoinColumn(name = "question_type"))
public class QuestionType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name")
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
