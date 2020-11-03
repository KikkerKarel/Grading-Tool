package gps.s3.correctingtool.exam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface IQuestionRepo extends JpaRepository<Question, Long> {

    Question findByText(String text);
}
