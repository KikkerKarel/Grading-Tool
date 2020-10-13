package gps.s3.correctingtool.exam;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IExamRepo extends JpaRepository<Exam, Long> {

    Exam findById(int id);

}
