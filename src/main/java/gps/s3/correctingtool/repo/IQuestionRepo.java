package gps.s3.correctingtool.repo;

import gps.s3.correctingtool.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IQuestionRepo extends JpaRepository<Question, Long> {
    Question findByText(String text);
    Question findById(Integer id);
}