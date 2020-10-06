package gps.s3.correctingtool.Repositories;

import gps.s3.correctingtool.Entities.Exam;
import org.springframework.data.repository.CrudRepository;

public interface ExamRepository extends CrudRepository<Exam, Integer> {
}
