package gps.s3.correctingtool.Repositories;

import gps.s3.correctingtool.Entities.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question, Integer> {
}