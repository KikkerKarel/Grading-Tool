package gps.s3.correctingtool.repo;

import gps.s3.correctingtool.entity.CorrectAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITextAnswerRepo extends JpaRepository<CorrectAnswer, Long> {
}