package gps.s3.correctingtool.repo;

import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.ExamItemId;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Collection;

public interface IExamItemRepo extends JpaRepository<ExamItem, ExamItemId> {
    Collection<ExamItem> findExamItemByQuestionId(int id);
    ExamItem findByQuestionIdAndExamId(int questionId, int examId);
}