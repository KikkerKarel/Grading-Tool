package gps.s3.correctingtool.exam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface IMcAnswerRepo extends JpaRepository<MultipleChoiceAnswer, Long> {

}