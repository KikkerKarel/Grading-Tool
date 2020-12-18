package gps.s3.correctingtool.repo;

import gps.s3.correctingtool.entity.QuestionSettings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IQuestionSettingsRepo extends JpaRepository<QuestionSettings, Long> {
}
