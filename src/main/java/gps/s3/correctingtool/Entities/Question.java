package gps.s3.correctingtool.Entities;
import javax.persistence.*;
import java.util.Date;


// Question
@Entity
@Table(name ="question")
@SecondaryTable(name="question_type", pkJoinColumns = @PrimaryKeyJoinColumn(name="id"))
 public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name="question_text")
    private String questionText;

    @ManyToOne
    @PrimaryKeyJoinColumn(name="question_type")
    private QuestionType questionType;

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public String getQuestionText() {
      return questionText;
   }

   public void setQuestionText(String questionText) {
      this.questionText = questionText;
   }

   public QuestionType getQuestionType() {
      return questionType;
   }

   public void setQuestionType(QuestionType questionType) {
      this.questionType = questionType;
   }
}


