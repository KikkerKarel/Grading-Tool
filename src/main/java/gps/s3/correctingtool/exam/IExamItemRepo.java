package gps.s3.correctingtool.exam;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface IExamItemRepo extends JpaRepository<ExamItem, ExamItemId> {

    Collection<ExamItem> findExamItemByQuestionId(int id);
}
