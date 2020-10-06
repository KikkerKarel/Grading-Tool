package gps.s3.correctingtool.Repositories;

import gps.s3.correctingtool.Entities.ExamStatus;
import org.springframework.data.repository.CrudRepository;

public interface ExamStatusRepository extends CrudRepository<ExamStatus, Integer> {
}
