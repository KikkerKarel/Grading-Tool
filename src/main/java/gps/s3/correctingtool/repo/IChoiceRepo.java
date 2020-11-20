package gps.s3.correctingtool.repo;

import gps.s3.correctingtool.entity.ChoiceAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Collection;

public interface IChoiceRepo extends JpaRepository<ChoiceAnswer, Long> {
    Collection<ChoiceAnswer> findByQuestionId(int id);
}