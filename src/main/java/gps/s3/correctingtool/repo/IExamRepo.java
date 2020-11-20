package gps.s3.correctingtool.repo;

import gps.s3.correctingtool.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Collection;

public interface IExamRepo extends JpaRepository<Exam, Long> {
    Exam findById(int id);
    Collection<Exam> findAllByExaminerId(long examinerId);
}