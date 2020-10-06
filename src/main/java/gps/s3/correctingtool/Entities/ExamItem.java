package gps.s3.correctingtool.Entities;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.io.Serializable;

//Exam Item
@Entity
@Table(name = "exam_item")
@SecondaryTables({
        @SecondaryTable(name = "question", pkJoinColumns = @PrimaryKeyJoinColumn(name = "question_type")),
        @SecondaryTable(name = "exam", pkJoinColumns = @PrimaryKeyJoinColumn(name = "id"))
})
public class ExamItem  {

    @EmbeddedId
    private Exam_Item_Key exam_item_key;
    //@Id
   // @GeneratedValue(strategy = GenerationType.AUTO)
    //private int id;

    @ManyToOne
    @PrimaryKeyJoinColumn(name = "exam_id")
    private Exam exam;
//
    @ManyToOne
    @PrimaryKeyJoinColumn(name = "question_id")
    private Question question;

    @Column(name = "text_answer")
    private String textAnswer;

    @NaturalId
    @Column(name = "mp_answer")
    private int mpAnswer;

    @Column(name = "graded_correct")
    private boolean gradedCorrect;

    public Exam_Item_Key getId() {
        return exam_item_key;
    }

    public void setId(Exam_Item_Key id) {
        this.exam_item_key = id;
    }

   //public Exam getExam() {
   //     return exam;
   // }

   // public void setExam(Exam exam) {
   //     this.exam = exam;
   // }

    //public Question getQuestion() {
    //    return question;
    //}

    //public void setQuestion(Question question) {
    //    this.question = question;
    //}


    public ExamItem() {
    }

    public ExamItem(Exam_Item_Key exam_item_key, String textAnswer, int mpAnswer, boolean gradedCorrect) {
        this.exam_item_key = exam_item_key;
        this.textAnswer = textAnswer;
        this.mpAnswer = mpAnswer;
        this.gradedCorrect = gradedCorrect;
    }

    public String getTextAnswer() {
        return textAnswer;
    }

    public void setTextAnswer(String textAnswer) {
        this.textAnswer = textAnswer;
    }

    public int getMpAnswer() {
        return mpAnswer;
    }

    public void setMpAnswer(int mpAnswer) {
        this.mpAnswer = mpAnswer;
    }

    public boolean isGradedCorrect() {
        return gradedCorrect;
    }

    public void setGradedCorrect(boolean gradedCorrect) {
        this.gradedCorrect = gradedCorrect;
    }

    public Exam_Item_Key getExam_item_key() {
        return exam_item_key;
    }

    public void setExam_item_key(Exam_Item_Key exam_item_key) {
        this.exam_item_key = exam_item_key;
    }
}
