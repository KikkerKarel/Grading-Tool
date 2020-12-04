package gps.s3.correctingtool.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class QuestionSettings {

    @Id
    private int questionId;

    private boolean checkQuote;
    private boolean checkGrammar;
    private boolean checkEnumeration;
    private int maxWords;

    public boolean isDefault()
    {
        return !checkQuote && !checkGrammar && !checkEnumeration && maxWords == 0;
    }

}
