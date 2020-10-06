package gps.s3.correctingtool.Repositories;

import gps.s3.correctingtool.Entities.Exam;
import gps.s3.correctingtool.Entities.ExamItem;
import gps.s3.correctingtool.Entities.Exam_Item_Key;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ExamItemRepository extends CrudRepository<ExamItem, Exam_Item_Key> {
    List<ExamItem> GetAllExamItemsPerExam(int exam_id);
}
